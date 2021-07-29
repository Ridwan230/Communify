//jshint esversion: 6

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const util = require('util');
const MD5= require('crypto-js/md5');
const socketio = require('socket.io');
const http = require('http');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "communify_store"
});

const query = util.promisify(con.query).bind(con);

con.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);


//------------------------------------------------Ridwan-----------------------------------------------------------

const getServers = async (req, res) => {

  const server = [];
  let result;
  if(req.params.userName==='all')
  {
    result = await query("SELECT `serverID`, `serverName`, `serverDescription`, `imageURL`, `owner` FROM `myserver` ");
  }
  else
  {
    result = await query("SELECT `serverID`, `serverName`, `serverDescription`, `imageURL`, `owner` FROM `myserver` WHERE `owner`='" + req.params.userName + "'");
  }
  

  for (var i = 0; i < result.length; i++) {
    var feed = {
      title: result[i].serverName,
      cardBody: result[i].serverDescription,
      imageUrl: result[i].imageURL,
      id: result[i].serverID,
      username: result[i].owner,
    };
    server.push(feed);
  }

  try {
    console.log(server)
    res.status(200).json(server);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

app.get("/ownedServers/:userName", getServers);




const React_Login = async (req, res) => {

  var username = req.body.username;
  var password = req.body.password;

  var flag1 = 0;

  con.query('SELECT Username,Password FROM `user_login`', function (err, result, fields) {
    if (err) throw err;
    else {
      for (var i = 0; i < result.length; i++) {
        if (result[i].Username === username && result[i].Password === password) {
          flag1 = 1;
          break;
        }
      }
    }
  });
  setTimeout(() => {
    if (flag1 === 1) {
      console.log("User Signed In!");
      try {
        res.status(200).json({ username: req.body.username });
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    }
    else {
      console.log("Username or Password does not match. Try Again!");
    }
  }, 200);
};

app.post("/React_Login", React_Login);





const React_SignUp = async (req, res) => {

  var username_2 = req.body.username;
  var password_2 = req.body.password;
  var confirm_password_2 = req.body.confirmPassword;
  var flag_2 = false;
  var email_2 = req.body.email;

  let result = await query('SELECT Username FROM `user_login`');

  for (var i = 0; i < result.length; i++) {
    if (result[i].Username === username_2) {
      flag_2 = true;
      break;
    }
  }
  console.log(password_2);
  console.log(confirm_password_2);
  console.log(flag_2);

  if (flag_2 === false && confirm_password_2 === password_2) {
    var insertQuery = 'insert into `user_login` (`Username`,`Password`,`Email`) values (?,?,?)';
    var query_insert = mysql.format(insertQuery, [username_2, password_2, email_2]);
    con.query(query_insert, function (err, response) {
      if (err) throw err;
      else {
        console.log("User Created!");
        try {
          res.status(200).json({ username: req.body.username });
        } catch (error) {
          res.status(404).json({ message: error.message });
        }
      }
    });
  }
  else if (flag_2 === true) {
    console.log("Username Already Taken!");
  }
  else {
    console.log("Confirm password does not match. Try Again!");
  }

}

app.post("/React_SignUp", React_SignUp);





const React_AddServer = async (req, res) => {

  var flag = false;

  let result = await query('SELECT serverName FROM `myserver`');
  console.log("Inside Addserver");
  console.log(result);
  for (var i = 0; i < result.length; i++) {
    if (result[i].serverName === req.body.servername) {
      flag = true;
      break;
    }
  }


  if (!flag) {
    var insertQuery = 'insert into `myserver` (`serverName`,`serverDescription`,`imageURL`,`owner`,`password`) values (?,?,?,?,?)';
    var query_insert = mysql.format(insertQuery, [req.body.servername, req.body.description, req.body.imageURL, req.body.username, req.body.serverpassword]);
    con.query(query_insert, function (err, response) {
      if (err) throw err;
      else {
        console.log("Server Created!");
        try {
          res.status(200).json({ username: req.body.username });
        } catch (error) {
          res.status(404).json({ message: error.message });
        }
      }
    });
  }
  else {
    console.log("Server Name already taken. Use another name!");
  }
}

app.post("/React_AddServer", React_AddServer);



//------------------------------------------------Ifrad-----------------------------------------------------------


const React_EnterServer = async (req, res) => {

  var username = req.body.username;
  var servername = req.body.servername;
  var code = req.body.code;

  var flag = false;

  con.query('SELECT serverName,Password FROM `myserver`', function (err, result, fields) {
    if (err) throw err;
    else {
      for (var i = 0; i < result.length; i++) {
        if (result[i].serverName === servername && result[i].Password === code) {
          flag = true;
          break;
        }
      }
    }
  });
  setTimeout(() => {
    if (flag === true) {
      console.log("Entered into the Server!");
      try {
        res.status(200).json({ servername: req.body.servername, servercode: req.body.code , username: req.body.username}); 
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    }
    else {
      console.log("Code does not match. Try Again!");
    }
  }, 200);
};

app.post("/React_EnterServer", React_EnterServer);



//---------------------------------------IO PART STARTS----------------------------------------------

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');

io.on('connect', (socket) => {

  socket.on('join', ({name, room}, callback) => {
      const {error,user} = addUser({id: socket.id, name, room});

      if(error) return callback(error);

      socket.join(user.room);

      socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
      socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined!`});


      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})

      callback();
  });

  socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);

      io.to(user.room).emit('message', {user: user.name, text: message});
      io.to(user.room).emit('roomData', {room: user.room, text: message});

      callback();
  });

  // socket.on('disconnect', () => {
  //     const user = removeUser(socket.id);

  //     if(user){
  //         io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`})
  //     }
  // })
});


//----------------------------------------------IO PART ENDS----------------------------------------------








app.listen(2999, function () {
  console.log("SERVER RUNNING IN PORT 2999");
});
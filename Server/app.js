//jshint esversion: 6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const util = require("util");
const MD5 = require("crypto-js/md5");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 2999;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "communify_store",
});

const query = util.promisify(con.query).bind(con);

con.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);

//------------------------------------------------Ridwan-----------------------------------------------------------

const getServers = async (req, res) => {
  const server1 = [];
  let result;
  if (req.body.displayserver === "all") {
    result = await query(
      "SELECT `serverID`, `serverName`, `serverDescription`, `imageURL`, `owner` FROM `myserver` ORDER BY `serverName`"
    );
  } else {
    result = await query(
      "SELECT `serverID`, `serverName`, `serverDescription`, `imageURL`, `owner` FROM `myserver`, `user_rooms` WHERE `room`=`serverName` AND `username`='" + req.body.username + "' ORDER BY `serverName`"
    );
  }

  for (var i = 0; i < result.length; i++) {
    var feed = {
      title: result[i].serverName,
      cardBody: result[i].serverDescription,
      imageUrl: result[i].imageURL,
      id: i+1,
      owner: result[i].owner,
      username: req.body.username,
    };
    server1.push(feed);
  }

  try {
    res.status(200).json(server1);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

app.post("/ownedServers", getServers);





const React_Login = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  var flag_username = false;
  var flag_password = false;

  let result = await query("SELECT Username,Password FROM `user_login`");
  for (var i = 0; i < result.length; i++) {
    if (result[i].Username === username) {
      flag_username = true;
      if (result[i].Password === password) {
        flag_password = true;
      }
      break;
    }
  }

  if (flag_username === false) {
    try {
      console.log({ username: "", message: "Username does not exist!" });
      res
        .status(200)
        .json({ username: "", message: "Username does not exist!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  } else if (flag_username === true && flag_password === false) {
    try {
      console.log({ username: "", message: "Password Incorrect!" });
      res.status(200).json({ username: "", message: "Password Incorrect!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  } else {
    try {
      res.status(200).json({ username: req.body.username, message: "" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};

app.post("/React_Login", React_Login);





const React_SignUp = async (req, res) => {
  var username_2 = req.body.username;
  var password_2 = req.body.password;
  var confirm_password_2 = req.body.confirmPassword;
  var flag_2 = false;
  var IsGoogleAccount = false;
  var email_2 = req.body.email;

  let result = await query("SELECT Username FROM `user_login`");

  for (var i = 0; i < result.length; i++) {
    if (result[i].Username === username_2) {
      flag_2 = true;
      break;
    }
  }

  if (flag_2 === false) {
    var insertQuery =
      "insert into `user_login` (`Username`,`Password`,`Email`,`IsGoogleAccount`) values (?,?,?,?)";
    var query_insert = mysql.format(insertQuery, [
      username_2,
      password_2,
      email_2,
      IsGoogleAccount,
    ]);
    con.query(query_insert, function (err, response) {
      if (err) throw err;
      else {
        console.log("User Created!");
        try {
          res.status(200).json({ username: req.body.username, message: "" });
        } catch (error) {
          res.status(404).json({ message: error.message });
        }
      }
    });
  } else {
    console.log("Username Already Taken!");
    try {
      res
        .status(200)
        .json({ username: "", message: "Username already taken!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};

app.post("/React_SignUp", React_SignUp);





const React_AddServer = async (req, res) => {
  var flag = false;

  let result = await query("SELECT serverName FROM `myserver`");
  for (var i = 0; i < result.length; i++) {
    if (result[i].serverName === req.body.servername) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    var insertQuery =
      "insert into `myserver` (`serverName`,`serverDescription`,`imageURL`,`owner`,`password`) values (?,?,?,?,?)";
    var query_insert = mysql.format(insertQuery, [
      req.body.servername,
      req.body.description,
      req.body.imageURL,
      req.body.username,
      req.body.serverpassword,
    ]);
    con.query(query_insert, function (err, response) {
      if (err) throw err;
      else {
        console.log("Server Created!");

        var insertQuery = 'insert into `user_rooms` (`username`,`room`,`isAdmin`) values (?,?,?)';
        var query_insert = mysql.format(insertQuery, [req.body.username, req.body.servername, true]);
        con.query(query_insert, function (err, response) {
            if (err) throw err;
            else {
                console.log("User " + req.body.username + " Joined room " + req.body.servername +" as Admin");
            }
        });




        try {
          res.status(200).json({ username: req.body.username, message: "" });
        } catch (error) {
          res.status(404).json({ message: error.message });
        }
      }
    });
  } else {
    console.log("Server Name already taken!");
    try {
      res
        .status(200)
        .json({
          username: req.body.username,
          message: "Server Name already taken!",
        });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};

app.post("/React_AddServer", React_AddServer);




//------------------------------------------------Ifrad-----------------------------------------------------------


const React_EnterServer = async (req, res) => {
  var username = req.body.username;
  var servername = req.body.servername;
  var code = req.body.code;

  var flag = false;

  let result = await query("SELECT serverName,Password FROM `myserver`");

  for (var i = 0; i < result.length; i++) {
    if (result[i].serverName === servername && result[i].Password === code) {
      flag = true;
      break;
    }
  }

  if (flag === true) {
    console.log("Entered into the Server!");

    var name=username;
    var room=servername;
    const { error, user } = addUser({ name, room });
    if (error) {
      return callback({ error: error });
    }

    try {
      res
        .status(200)
        .json({
          servername: req.body.servername,
          servercode: req.body.code,
          username: req.body.username,
        });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  } else {
    console.log("Code does not match. Try Again!");
  }
};

app.post("/React_EnterServer", React_EnterServer);






const isConnectedToServer = async (req, res) => {
  var username = req.body.username;
  var servername = req.body.servername;

  var flag = false;

  let result = await query("SELECT username,room FROM `user_rooms`");

  for (var i = 0; i < result.length; i++) {
    if (result[i].room === servername && result[i].username === username) {
      flag = true;
      break;
    }
  }

  try {
    res.status(200).json({ flag: flag, });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

};

app.post("/isConnectedToServer", isConnectedToServer);






const Leave_Server = async (req, res) => {

  var username = req.body.username;
  var room = req.body.servername;

  let result = await query("DELETE FROM `user_rooms` WHERE `room`='" + room + "'and `username`='" + username + "'");

  try {
    res.status(200).json({ username: username, });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

};

app.post("/Leave_Server", Leave_Server);


const Delete_Server = async (req, res) => {

  var username = req.body.username;
  var room = req.body.servername;

  let result_1 = await query("DELETE FROM `user_rooms` WHERE `room`='" + room + "'");
  let result_2 = await query("DELETE FROM `myserver` WHERE `serverName`='" + room + "'");
  let result_3 = await query("DELETE FROM `messages` WHERE `server_name`='" + room + "'");

  try {
    res.status(200).json({ username: username, });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

};


app.post("/Delete_Server", Delete_Server);





const isAdmin = async (req, res) => {

  var username = req.body.username;
  var room = req.body.servername;
  var flag=false;

  let result = await query("SELECT username,room,isAdmin FROM `user_rooms`");

  for(var i=0; i<result.length; i++)
  {
    if(result[i].username===username && result[i].room===room)
    {
      if(result[i].isAdmin===1)
      {
        flag=true;
      }
      else
      {
        flag=false;
      }
      break;
    }
  }

  try {
    res.status(200).json({ flag: flag, });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

};

app.post("/isAdmin", isAdmin);





const MemberList = async (req, res) => {

  var room = req.body.servername;
  var list = [];
  var isAdmin = 0;

  let result = await query("SELECT username FROM `user_rooms` WHERE `room`='" + room + "'and `isAdmin`='" + isAdmin + "'");

  for (var i = 0; i < result.length; i++) {
    var feed = {
      username: result[i].username,
    };
    list.push(feed);
  }

  try {
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

app.post("/MemberList", MemberList);





const AdminList = async (req, res) => {

  var room = req.body.servername;
  var list = [];
  var isAdmin = 1;

  let result = await query("SELECT username FROM `user_rooms` WHERE `room`='" + room + "'and `isAdmin`='" + isAdmin + "'");

  for (var i = 0; i < result.length; i++) {
    var feed = {
      username: result[i].username,
    };
    list.push(feed);
  }

  try {
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

app.post("/AdminList", AdminList);





const Add_Admin = async (req, res) => {

  var username = req.body.username;
  var room = req.body.servername;

  let result = await query("UPDATE `user_rooms` SET isAdmin = 1 WHERE `room`='" + room + "'and `username`='" + username + "'");

}

app.post("/Add_Admin", Add_Admin);





const JoinedServers = async (req, res) => {

  const server1 = [];
  var username = req.body.username;

  let result = await query("SELECT serverName, imageURL FROM myserver, user_rooms WHERE `room`=`serverName` AND `username`='" + req.body.username + "'");

  for (var i = 0; i < result.length; i++) {
    var feed = {
      title: result[i].serverName,
      imageUrl: result[i].imageURL,
    };
    server1.push(feed);
  }

  try {
    res.status(200).json(server1);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

app.post("/JoinedServers", JoinedServers);



//---------------------------------------IO PART STARTS----------------------------------------------

const { addUser, getUser, getUsersInRoom, getMessages, } = require("./users.js");
const { encrypt, decrypt } = require('./encryption');

io.on("connect", (socket) => {
  socket.on("join", (name, room, channel_name, callback) => {
    const { error, user } = addUser({ name, room });

    if (error) {
      return callback({ error: error });
    }

    socket.join(room);

    //socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
    //socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!` });

    //io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

    (async function () {
      let result = await getMessages(room, channel_name);
      var length1 = result.length;

      callback({
        result: result,
        length1: length1,
      });
    })();
  });

  socket.on("sendMessage", (message, name, room, channel_name, callback) => {

    // const hash = encrypt(message);

    // var insertQuery = 'insert into `messages` (`sender`,`server_name`,`channel_name`,`initial_vector`,`content`) values (?,?,?,?,?)';
    // var query_insert = mysql.format(insertQuery, [name, room, channel_name, hash.iv, hash.content]);

    var insertQuery = 'insert into `messages` (`sender`,`server_name`,`channel_name`,`text`) values (?,?,?,?)';
    var query_insert = mysql.format(insertQuery, [name, room, channel_name, message]);
    con.query(query_insert, function (err, response) {
      if (err) throw err;
    });

    io.to(room).emit("message", { user: name, text: message });
    //io.to(user.room).emit('roomData', { room: user.room, text: message });

    callback();
  });

  
});



//-----------------------------------------Calendar Part--------------------------------------

const AddEvent = async (req, res) =>{

  var insertQuery =
  "insert into `events` (`userName`,`serverName`,`isAdmin`,`eventDate`,`eventMonth`,`eventYear`,`eventName`,`eventDescription`) values (?,?,?,?,?,?,?,?)";
var insertQuery = mysql.format(insertQuery, [
  req.body.userName,
  req.body.serverName,
  req.body.isAdmin,
  req.body.eventDate,
  req.body.eventMonth,
  req.body.eventYear,
  req.body.eventName,
  req.body.eventDescription,
]);

con.query(insertQuery, function (err, response) {
  if (err) throw err;
  else {
    try {
      res.status(200).json({ message: 'Successful' });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
});
}

app.post("/AddEvent", AddEvent);






const GetEvent = async (req, res) =>{

  // console.log(req.body)
  // console.log("Hello")

  let server=req.body.servername;
  let isAdmin=req.body.isAdmin;
  let userName=req.body.username;
  let data=[];

  let result = await query("SELECT * FROM events WHERE `isAdmin`=1 AND `serverName`='" + server +"'");

  for (var i = 0; i < result.length; i++) {
    var feed = {
      userName: result[i].userName,
            serverName: result[i].serverName,
            isAdmin: result[i].isAdmin,
            eventDate: result[i].eventDate,
            eventMonth: result[i].eventMonth,
            eventYear: result[i].eventYear,
            eventName: result[i].eventName,
            eventDescription: result[i].eventDescription,
    };
    data.push(feed);
  }

  if(isAdmin===0){
    let result = await query("SELECT * FROM events WHERE `isAdmin`=0 AND `serverName`='" + server + "' AND `userName`='" + userName +"'");

    for (var i = 0; i < result.length; i++) {
      var feed = {
        userName: result[i].userName,
              serverName: result[i].serverame,
              isAdmin: result[i].isAdmin,
              eventDate: result[i].eventDate,
              eventMonth: result[i].eventMonth,
              eventYear: result[i].eventYear,
              eventName: result[i].eventName,
              eventDescription: result[i].eventDescription,
      };
      data.push(feed);
    }

  }


  // console.log(data);
  
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}


app.post("/GetEvent", GetEvent);










//----------------------------------------------IO PART ENDS----------------------------------------------

/*require('dotenv').config()
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./passport-setup')

app.use(cookieSession({
  name: 'tuto-session',
  keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.use(passport.initialize());
app.use(passport.session());

app.get('/failed', (req, res) => {
  console.log("Sign in FAILED using Google account")
  //res.send('You Failed to log in!')
})

app.get('/good', isLoggedIn, (req, res) => {
  console.log("Signed IN SUCCESSFULLY using Google account");
  //res.render("pages/profile",{name:req.user.displayName,pic:req.user.photos[0].value,email:req.user.emails[0].value})
})


app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// const google = async (req, res) => {
//   console.log("INSIDE GOOGLE FUNCTION");
//   passport.authenticate('google', { scope: ['profile', 'email'] });
// }

//app.get('/google', google); 


app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    console.log("before success");
    res.redirect('/good');
  }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

*/

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

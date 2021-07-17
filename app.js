//jshint esversion: 6

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const util = require('util');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "communify_store"
});

const query = util.promisify(con.query).bind(con);

con.connect(function(err){
  if(err) throw err;
  console.log("Database Connected!");
});

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


//------------------------------------------------Ridwan-----------------------------------------------------------

const getServers = async (req, res) => {
  console.log(req.body);

const server=[];

let result= await query("SELECT `serverID`, `serverName`, `serverDescription`, `imageURL`, `owner` FROM `myserver` WHERE `owner`='"+req.params.userName+"'");
console.log(result);

  for(var i=0; i<result.length;i++)
      {
        console.log(result[i].serverName);
        var feed={
            title: result[i].serverName,
            cardBody: result[i].serverDescription,
            imageUrl: result[i].imageURL,
            };
        server.push(feed);
          }

  try {
      res.status(200).json(server);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

app.get("/ownedServers/:userName", getServers);




const React_Login = async (req,res) => {
  console.log(req.body);

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
        res.status(200).json({username : req.body.username});
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

  console.log(req.body);
  var username_2 = req.body.username;
  var password_2 = req.body.password;
  var confirm_password_2=req.body.confirmPassword;
  var flag_2 = new Boolean(false);
  var email_2=req.body.email;

  let result= await query('SELECT Username FROM `user_login`');
  console.log(result);

      for (var i = 0; i < result.length; i++) {
        if (result[i].Username == username_2) {
          flag_2 = true;
          break;
        }
      }
    console.log(password_2);
    console.log(confirm_password_2);
    console.log(flag_2);


  if (flag_2==false && confirm_password_2==password_2) {
    var insertQuery = 'insert into `user_login` (`Username`,`Password`,`Email`) values (?,?,?)';
    var query_insert = mysql.format(insertQuery, [username_2, password_2,email_2]);
    con.query(query_insert, function (err, response) {
      if (err) throw err;
      else {
        console.log("User Created!");
        try {
          res.status(200).json({username : req.body.username});
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



app.listen(2999, function() {
  console.log("SERVER RUNNING IN PORT 2999");
});

const React_AddServer = async(req,res) =>{
  console.log(req.body);

  var insertQuery = 'insert into `myserver` (`serverName`,`serverDescription`,`imageURL`,`owner`) values (?,?,?,?)';
  var query_insert = mysql.format(insertQuery, [req.body.servername, req.body.description,req.body.imageURL,req.body.username]);
  con.query(query_insert, function (err, response) {
    if (err) throw err;
    else {
      console.log("Server Created!");
      try {
        res.status(200).json({username : req.body.username});
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    }
  });

}


app.post("/React_AddServer", React_AddServer);
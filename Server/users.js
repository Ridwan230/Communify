const { get } = require("./router");
const mysql = require('mysql');
const util = require('util');
const { encrypt, decrypt } = require('./encryption');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "communify_store"
});

const query = util.promisify(con.query).bind(con);

con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected in users.js!");
});

const users = [];

const addUser = async ({ name, room }) => {

    var existingUser = false;

    let result = await query("SELECT `username` FROM `user_rooms` WHERE `room`='" + room + "'");

    for (var i = 0; i < result.length; i++) {
        if (result[i].username === name) {
            existingUser = true;
            break;
        }
    }

    var flag = false;
    if (!existingUser) {
        let result1 = await query("SELECT `serverName`,`owner` FROM `myserver`");

        for (var i = 0; i < result1.length; i++) {
            if (result1[i].serverName === room && result1[i].owner === name) {
                flag = true;
                break;
            }
        }

        var insertQuery = 'insert into `user_rooms` (`username`,`room`,`isAdmin`) values (?,?,?)';
        var query_insert = mysql.format(insertQuery, [name, room, flag]);
        con.query(query_insert, function (err, response) {
            if (err) throw err;
            else {
                console.log("User " + name + " Joined room " + room);
            }
        });

    }

    const user = { name, room };

    //users.push(user);

    return { user };
}


const getMessages = async (room, channel_name) => {

    // let result = await query("SELECT `sender`,`text` FROM `messages` WHERE `server_name`='" + room + "'and `channel_name`='" + channel_name + "'");
    // return result;
    let result = await query("SELECT `sender`,`initial_vector`,`content` FROM `messages` WHERE `server_name`='" + room + "'and `channel_name`='" + channel_name + "'");
    const result1=[];
    for(var i=0;i<result.length;i++)
    {
        const hash = {
            iv: result[i].initial_vector,
            content: result[i].content,
        }
        const message = decrypt(hash);
        result1[i]={
            sender: result[i].sender,
            text: message
        }
    }
    return result1;
}



const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = { addUser, getUser, getUsersInRoom, getMessages };
const { get } = require("./router");
const mysql = require('mysql');
const util = require('util');

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

const addUser = async ({ id, name, room }) => {
    // name = name.trim().toLowerCase();
    // room = room.trim().toLowerCase();

    //const existingUser = users.find((user) => user.room === room && user.name === name);
    var existingUser = false;

    let result = await query("SELECT `username` FROM `user_rooms` WHERE `room`='" + room + "'");

    for (var i = 0; i < result.length; i++) {
        if (result[i].username === name) {
            existingUser = true;
            break;
        }
    }

    if (!existingUser) {
        var insertQuery = 'insert into `user_rooms` (`username`,`room`) values (?,?)';
        var query_insert = mysql.format(insertQuery, [name, room]);
        con.query(query_insert, function (err, response) {
            if (err) throw err;
            else {
                console.log("User " + name + " Joined room " + room);
            }
        });
    }

    const user = { id, name, room };

    //users.push(user);

    return { user };
}


const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}


const getMessages = async ( room, channel_name ) => {

    let result = await query("SELECT `sender`,`text` FROM `messages` WHERE `server_name`='" + room + "'and `channel_name`='" + channel_name + "'");
    
    return result;
}



const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom, getMessages };
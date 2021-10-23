const mysql = require('mysql')


const connectDB =()=>{
return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "twitee_app",
    port: "3306",
    multipleStatements:true
});
}


module.exports = connectDB

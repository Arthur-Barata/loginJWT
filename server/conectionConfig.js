import mysql from "mysql";


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"teste"
})

export default db;


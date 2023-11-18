
const mysql = require('mysql');
const config=require('../config/config.json');
class db {
    constructor() { 
        this.host=config.server.dbserver;
        this.dbname=config.server.dbname;
        this.dbuser=config.server.dbuser;
        this.password=config.server.password;
        this.dbname=config.server.dbname;
    }
    connect() { 
        const connection=mysql.createConnection({
            host:this.host,
            user:this.dbuser,
            password:this.password
        });
        connection.connect((err)=>{
            if(err) throw err;
            console.log("database connected...");
        });

    }
    queryexec=()=>{
        this.connection.query("select * from users",(err,result,fields)=>{
            if(err) throw err;
            return JSON.stringify(result);
        });
    }

}

module.exports = db;

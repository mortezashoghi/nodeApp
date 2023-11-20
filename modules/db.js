
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
        this.pool=mysql.createConnection({
            host:this.host,
            user:this.dbuser,
            password:this.password,
            database:this.dbname
        });
        this.pool.connect((err)=>{
            if(err) throw err;
            console.log("connected");
        });
    }
    queryexec=()=>{
            this.connect();
            this.pool.query("select * from users",(err,result)=>{
               // connection.release();
            if(err) console.log(err) ;
            return JSON.stringify(result);
        });
   
    }
    //insert with promises
    addrecord=(tblName,data)=>{
      // return  new Promise((resolve,reject)=>{
        //let sql="insert into "+tblName+" valuses("+data["fulname"]+","+data["email"]+","+data["password"]+","+data["token"]+")";
        let sql="insert into "+tblName+"(fulname,email,password,token) valuses(?,?,?,?)";
        this.connection.query(sql,data,(err,result)=>{
           if(err){
            //reject(error);
            return err;
           }else{
            //resolve(JSON.stringify(result));
            return JSON.stringify(result);
           }
       /*});*/
    });   
    }

}

module.exports = db;

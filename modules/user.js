
import { pool } from "./db.js";
import crypto from "crypto";
import events from 'events';

    export const fulinfo=async(req,res)=> { 
         res.end("mors--37");
    }
    export const tavan=async(req,res)=> { 
        res.end("true");
    }
    export const iseven=async(req,res)=>{
        const {age}=req.params;
        if ((age % 2) ==0 ) res.end("iseven");
        else return res.end(age+"is odd");
    }
export const adduser = async (req,res) => {
        var data=["morsh","mors@gmail.com",crypto.createHash('sha1').update("password").digest('hex'),1,"sdfdsfadsfdfdsf"];
      
        const result=await pool.query("insert into users(fulname,email,password,isactive,token) values(?,?,?,?,?)",data);
        added.emit("useradd","first event dev");
        if (result[0].affectedRows > 0) res.end("add one row");
       //console.log(JSON.stringify(result));

       
    }
    export const userlist=async(req,res)=>{
        const result=await pool.query("SELECT * FROM users");
        console.log(result[0][1].email);
        const added=new events.EventEmitter();
        added.on("useradd",(data)=>{
            res.end("adddddded");
        });
        res.render('index',{usrlst: result[0]});
    }
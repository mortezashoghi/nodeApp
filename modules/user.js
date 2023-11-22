
import {pool} from "./db.js";


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
    export const adduser=async(tbl,data)=>{
        const result=await pool.query("insert into "+tbl+"(fulname,email,password,isactive,token) values(?,?,?,?,?)",data);
        if (result.affectedRows>0) return true;
       //console.log(JSON.stringify(result));

       
    }
    export const userlist=async(req,res)=>{
        const result=await pool.query("SELECT * FROM users");
        //console.log(JSON.stringify(result[0]));
        res.render('index',{usrlst: JSON.stringify(result[0])});
    }
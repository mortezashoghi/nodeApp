    import { pool } from "./db.js";
    import crypto from "crypto";
    import https from "https";
    import axios from "axios";
    import {signIn,isLogin,refreshToken,logout} from '../controllers/auth/auth.js'; 
    import { emmiter } from "../core/eventcenter.js";


    
    export const adduser = async (req,res) => {
        const { name,email,password,repass } = req.body;
        //console.log(JSON.stringify(hasuser[0].count));
        const data=[name,email,crypto.createHash('sha1').update(password).digest('hex'),1,crypto.createHash('sha1').update(password).digest('hex')];
        const result=await pool.query("insert into users(fulname,email,password,isactive,token) values(?,?,?,?,?)",data);
        if (result[0].affectedRows > 0) //res.end("add one row");
           res.render('index');
    }
   
    export const userlist=async(req,res)=>{
        const result=await pool.query("SELECT * FROM users");
        console.log(result[0][1]);
        res.render('index',{usrlst: result[0]});
    }
    export const getAll=async(req,res)=>
    {      
        const url = 'https://gorest.co.in/public/v2/users';
        let data = '';
        const request = https.request(url, (response) => {    
         response.on('data', (chunk) => {
             data = data + chunk.toString();
         });
         response.on('end', () => {
             const body = JSON.parse(data);        
            res.send(body);
         });
         });
         request.on('error', (error) => {
         console.log('An error', error);
         });
         request.end();
    }
    //with fetch
    export const getAllf=async(req,res)=>
    {      
        const url='https://gorest.co.in/public/v2/users';
        fetch(url).then((response)=>response.json())
        .then((response)=>{
            res.end(JSON.stringify(response));
        });   
    }
    //with axios
    export const getAlla=(req,res)=>{
        const url ='https://gorest.co.in/public/v2/users';
        const request =async ()=>{
            const response=await axios(url);
            res.end(JSON.stringify(response.data));
        };
        request();
    }

    //with fetch get user by email and password
    export const loginuser=async(req,res)=>{
        let { email,password } = req.body;
        password=password.trim();
        const data=[email,crypto.createHash('sha1').update(password).digest('hex')];
        // console.log(data[0]+"  "+data[1]);

        //console.log(JSON.stringify(data));
        const result=await pool.query("SELECT COUNT(*) as cnt FROM users WHERE email=? And password=?",data);
        if (result[0][0].cnt==0) {
          res.render('index',{signin:false,username:email,msg:"username or password is incorrect"});
        }if(result[0][0].cnt>0) {
            console.log("execute ....");
            let tokenResult=await signIn(true,email);
            if(!tokenResult){
                res.status(401).end();
                return;
            }
           //console.log(tokenResult[0]+" "+tokenResult[1]);
            res.cookie('token',tokenResult[0],{maxAge:tokenResult[1]});
            res.render('index',{signin:false,username:email});
            //console.log(tokenResult[0]+"  "+tokenResult[1]);
            //console.log(result[0][0].cnt);
        }else console.log("user dose not exsit");

    }
    const emtA=new emmiter();
    emtA.on('test',(req,res)=>{
        console.log('test event is runnig...');
        return true;
    });
    
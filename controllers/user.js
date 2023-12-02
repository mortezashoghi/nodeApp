    import { pool } from "./db.js";
    import { security } from "./authentication/security.js";
    import crypto from "crypto";
    import https from "https";
    import axios from "axios";


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
        const { name,email,password,repass } = req.body;
        const secure=new security(email);
        let hasuser=await secure.checkuser();
        let islogin=await secure.islogin(req);
        //console.log(JSON.stringify(hasuser[0].count));
        const data=[name,email,crypto.createHash('sha1').update(password).digest('hex'),1,crypto.createHash('sha1').update(password).digest('hex')];
        //let data=["morsh","mors@gmail.com",crypto.createHash('sha1').update("password").digest('hex'),1,"sdfdsfadsfdfdsf"];
        if(hasuser==0 && islogin==false){
        const result=await pool.query("insert into users(fulname,email,password,isactive,token) values(?,?,?,?,?)",data);
        if (result[0].affectedRows > 0) //res.end("add one row");
           //console.log(JSON.stringify(result));
           res.render('index');
        }else{
            res.render('index',{"message":"user already exist"});
        }
        
    }
    export const islogin=async (req)=>{
        const secure=new security();
       
        return (await secure.islogin(req));
    }
    export const userlist=async(req,res)=>{
        const result=await pool.query("SELECT * FROM users");
        console.log(result[0][1].email);
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
            //console.log(response.data);
            res.end(JSON.stringify(response.data));
        };
        request();
    }
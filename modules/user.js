
    import { pool } from "./db.js";
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
<<<<<<< HEAD
export const adduser = async (req,res) => {
    // const { params } = req.params;
    console.log(req.params.email);

    /*var data = ["morsh", "mors@gmail.com", crypto.createHash('sha1').update("password").digest('hex'), 1, "sdfdsfadsfdfdsf"];
=======
    export const adduser = async (req,res) => {
        var data=["morsh","mors@gmail.com",crypto.createHash('sha1').update("password").digest('hex'),1,"sdfdsfadsfdfdsf"];
>>>>>>> 8edac3c (all type of call api (https,axios,frtch) in user.js)
      
        const result=await pool.query("insert into users(fulname,email,password,isactive,token) values(?,?,?,?,?)",data);
        if (result[0].affectedRows > 0) res.end("add one row");
       //console.log(JSON.stringify(result));
<<<<<<< HEAD
       */
    res.render('index');
       
=======

>>>>>>> 8edac3c (all type of call api (https,axios,frtch) in user.js)
    }
    export const userlist=async(req,res)=>{
        const result=await pool.query("SELECT * FROM users");
        console.log(result[0][1].email);
        res.render('index',{usrlst: result[0]});
    }
    export const getAll=async(req,res)=>
    {      
        //   let options = {
        //   hostname: 'gorest.co.in',
        //   port: 443,
        //   path: '/public/v2/users',
        //   method: 'GET',
        //   headers: {
        //        'Accept':'application/json',
        //        'Content-Type':'application/json'
        //      }
        // };
        // const request = https.request(options, (res) => {
        //   console.log('statusCode:', res.statusCode);
        //   console.log('headers:', res.headers);
        //   res.on('data', (chunk) => {
        //   let data = data + chunk.toString();
        // });
        // res.on('end', () => {
        // const body = JSON.parse(data);
        // console.log(body);
        // });
        // request.end();

const url = 'https://gorest.co.in/public/v2/users';
let data = '';
const request = https.request(url, (response) => {
   
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
   
    response.on('end', () => {
        const body = JSON.parse(data);
       // console.log(body);
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
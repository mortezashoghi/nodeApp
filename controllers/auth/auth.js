import jwt from 'jsonwebtoken';
//const { sign, verify } = jwt;
//const {JsonWebTokenError, jsonwebtoken: jwt} = pkg;
import dotenv from 'dotenv';

dotenv.config();

const jwrSecret=process.env.SECRET_KEY;
const jwtExp=process.env.JWT_EXP;


//for test 
const users = {
    user1: 'password1',
    user2: 'password2'
  }

export const signIn=(istrust,username)=>{
   // const {username,password}=req.body;
    //if(!username || !password || users[username] !== password ){
    if(!istrust){
    return false;
    }
    const token=jwt.sign({username},jwrSecret,{
        algorithm:'HS256',
        expiresIn:jwtExp
    });
    let result=[token,jwtExp*3];
    return result;
    //res.cookie('token',token,{maxAge:jwtExp*3});
    //res.end();
}

export const welcome=(req,res)=>{
    const token=req.cookie.token;
    if(!token){
        return res.sendStatus(401);
    }
    let payload;
    try{
    payload=jwt.verify(token,jwrSecret);
    }catch(e){
        if(e instanceof jwt.JsonwebTokenError){
            return res.status(401).end();
        }
        return res.status(400).end();
    }
    res.render('index',{signin:true});
}

export const refreshToken=(req,res)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).end();
    }
    let payload;
    try{
        payload=jwt.verify(token,jwrSecret);
        
    }catch(e){
        if(e instanceof jwt.JsonWebTokenError){
            return res.status(401).end();
        }
        return res.status(400).end();

    }

    const nowUnixSec=Math.round(Number(new Date())/1000);
    if(payload.exp - nowUnixSec>30){
        return res.status(400);
    }
    //create token for the current user,with renewed exp time
    const newToken=jwt.sign({username:payload.username},jwrSecret,{
        algorithm:'HS256',
        expiresIn:jwtExp
    });

    //set cookie
    res.cookies('token',token,{maxAge: jwtExp*3});
    res.end();
}

export const logout=(req,res)=>{
    res.cookie('token','',{maxAge:0});
    res.end();
}

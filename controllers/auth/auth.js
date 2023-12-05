import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwrSecret=process.env.SECRET_KEY;
const jwtExp=process.env.JWT_EXP*10;


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
    let result=[token,jwtExp];
    return result;
    //res.cookie('token',token,{maxAge:jwtExp*3});
    //res.end();
}

export const isLogin=(req,res,next)=>{
    console.log("start ");
    const token=req.cookies.token;
    console.log("token",JSON.stringify(token));
    if(!token){
        return res.sendStatus(401);
    }
    let payload;
    try{
    payload=jwt.verify(token,jwrSecret);
    }catch(e){
        console.log("error",e);
        if(e instanceof jwt.JsonWebTokenError){
            return res.status(401).end();
        }
        return res.status(400).end();
    }
    next();
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

    const nowUnixSec=Math.round(Number(new Date())/1000 + (60 * 60 * 60));
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

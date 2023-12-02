import {jsonwebtoken} from 'jsonwebtoken';
import {SECRET_KEY} from './';

export const authenticateToken=(req,res,next)=>{
    const token =req.header('authoration')?.split(' ')[1];

    if(!token){
        return res.status(401).json({error:'unauthorized'});
    }

    jsonwebtoken.verify(token,SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(403).json({error:'Invalid token'});
        }
    });
    req.user=user;
    next();

}
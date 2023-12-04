import express from "express";
import {fulinfo,tavan,iseven,adduser,userlist,getAll,getAllf,getAlla,loginuser} from "../controllers/user.js";
import { signIn, welcome, refreshToken, logout } from '../controllers/auth/auth.js';


const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'test site' });
});
router.get('/about', function(req, res, next) {
    console.log("is hear kjhsdakjhaskjhdkjsahdjkashdkj");
     console.log(JSON.stringify(req.body));
      res.end("hi");
});

router.get('/foo', fulinfo);
router.get('/tavan', tavan);
router.get('/even/:age',iseven);
router.get('/userlist',userlist);
router.get('/adduser', adduser);
//router.post("/register", adduser);
router.get("/login",(req,res)=>{
res.render('index',{signin:true});
});
router.get('/getall',getAll);
router.post('/signin', loginuser)
router.get('/welcome', welcome)
router.post('/refresh', refreshToken)
router.get('/logout', logout)

export default router;

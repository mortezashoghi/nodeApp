import express from "express";
import {fulinfo,tavan,iseven,adduser,userlist} from "../modules/user.js"
import {pool} from "../modules/db.js"
import crypto from "crypto";
import { promises } from "dns";
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
router.get('/adduser',(req,res,next)=>{
    var data=["morsh","mors@gmail.com",crypto.createHash('sha1').update("password").digest('hex'),1,"sdfdsfadsfdfdsf"];
    res.end(JSON.stringify(user.adduser("users",data)));
});
export default router;
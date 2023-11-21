const express = require('express');
const router = express.Router();
const user = require('../modules/user');
const db = require('../modules/db');
const crypto=require('crypto');
const { promises } = require('dns');


/* GET home page. */
router.get('/', function(req, res, next) {
     //console.log(req.cookies);
    //res.end('test site');
    res.render('index', { title: 'test site' });
});
router.get('/about', function(req, res, next) {
    console.log("is hear kjhsdakjhaskjhdkjsahdjkashdkj");
     console.log(JSON.stringify(req.body));
  
//    console.log(user.fulinfo());
    res.end("hi");
});

router.get('/foo', (req,res,next) => { 
    console.log("you are in information module");
    const userinfo = new user.user("mors", 37);
    let ful = userinfo.fulinfo();
    console.warn(ful);
    res.end(ful);

})
router.get('/tavan', (req,res,next) => { 

    const tvn = new user.user("mors",37)
    let t = tvn.tavan();
    console.warn(t);
    res.end(JSON.stringify(t));

});
router.get('/userlist',(req,res,next)=>{
    const ulist=new promises((resolve,reject),()=>{
        
    });
   // res.write(JSON.stringify(ulist.queryexec()));
   console.log(ulist.queryexec());
    //res.render('index',{users: JSON.stringify(ulist.queryexec())});
   // res.end();
});
router.get('/adduser',(req,res,next)=>{
    var data=["morsh","mors@gmail.com",crypto.createHash('sha1').update("password").digest('hex'),1,"sdfdsfadsfdfdsf"];
    const addusr=new user("mors",37);
    result=addusr.adduser("users",data);
    console.log(JSON.stringify(result));
});
module.exports = router;

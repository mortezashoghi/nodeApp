const express = require('express');
const router = express.Router();
const user = require('../modules/user');
const db = require('../modules/db');
const crypto=require('crypto');


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
    const ulist=new db();
    let t = ulist.queryexec();
     console.warn(t);
     res.end(JSON.stringify(t));
});
router.get('/adduser',(req,res,next)=>{
    var data={"fulname":"morssh","email":"mors@gmail.com","passwrd":crypto.createHash('sha1').update("password").digest('hex')};
    console.warn(data);
    const addusr=new user.user("mors",37);
    result=addusr.adduser("users",data);
    console.warn(1);
});
module.exports = router;

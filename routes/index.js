import express from "express";
import {fulinfo,tavan,iseven,adduser,userlist,getAll,getAllf,getAlla} from "../modules/user.js"
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
router.get('/adduser', adduser);
<<<<<<< HEAD
router.post("/register", adduser);
router.get('/login', (req, res) => {
    res.render('index', {signin:"true"})
});
=======
router.get('/getall',getAll);
>>>>>>> 8edac3c (all type of call api (https,axios,frtch) in user.js)

export default router;
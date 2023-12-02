import express from "express";
import {fulinfo,tavan,iseven,adduser,userlist,getAll,getAllf,getAlla,islogin} from "../controllers/user.js"
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

=======
>>>>>>> ee7efc8 (confilict solving)
router.post("/register", adduser);
router.get('/login', (req, res) => {
    req.session.user_id = null;
    if(!islogin(req)) console.log(islogin(req)); else return false; 
   
});
<<<<<<< HEAD
router.get('/getall',getAll);
=======
>>>>>>> ee7efc8 (confilict solving)

export default router;

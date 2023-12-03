import express from "express";
import {fulinfo,tavan,iseven,adduser,userlist,getAll,getAllf,getAlla} from "../controllers/user.js"
import {auth} from '../auth.js';
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
router.post("/register", adduser);
router.get('/login', (req, res) => {
   res.render('index',auth,{signin: true});
});
router.get('/getall',getAll);

router.post("/users", auth, (req, res) => {
    let body = req.body;
    adduser
   /* res.status(200).json({
        data: "users post request entertained"
    })*/
})

export default router;

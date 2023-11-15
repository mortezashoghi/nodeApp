const express = require('express');
const router = express.Router();
//fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    // req.session.value = "shoghi";

     console.log(req.cookies);
    res.end('test site');
});
router.get('/about', function(req, res, next) {
    console.log("is hear kjhsdakjhaskjhdkjsahdjkashdkj");
    // console.log(JSON.stringify(req.body));
    res.end("hi");
});

module.exports = router;

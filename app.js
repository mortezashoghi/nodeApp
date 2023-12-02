import createError from "http-errors";
import express from "express";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import router from "./routes/index.js";
const app=express();
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.get('*', (req, res) => {
    res.send("<center><h2>404 Page Not Found</h2></center>");
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
/*
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
    console.warn(err);
});*/

const PORT = 3000;
// make the server listen to requests
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else
  console.log(`Server running at: http://localhost:${PORT}/`);
});


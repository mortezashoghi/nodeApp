const createError=require('http-errors');
const express=require("express");
const path=require("path");
const cookieParser=require('cookie-parser');
const logger=require("morgan");
const session = require('express-session');
const bodyParser = require('body-parser');

const indexroutes=require("./routes/index");
const app=express();



// view engine setup


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexroutes);
app.use('/about', indexroutes);
app.use('/foo', indexroutes);
app.use('/tavan', indexroutes);
app.use("/userlist",indexroutes);


app.get('*', (req, res) => {
    res.send("<center><h2>404 Page Not Found</h2></center>");
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
    //console.warn(err);
});

const PORT = 3000;


// make the server listen to requests
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else
  console.log(`Server running at: http://localhost:${PORT}/`);
});


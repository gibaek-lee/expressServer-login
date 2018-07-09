var express = require('express');
var app = express();

var server = app.listen(3000,function(){
  console.log("server started on port 3000!");
})

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//header.ejs에서 경로설정 주의. public 경로를 사용하고 있으므로 ./css ./images ./javascript로 경로 설정해야한다. ../public/ 이런 식으로 접근하면 404 에러
app.use(express.static('public'));

var fs = require('fs');
//var bodyParser = require('body-parser');
//var session = require('express-session');

var router = require('./router/main')(app,fs);

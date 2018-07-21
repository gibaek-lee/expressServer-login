module.exports = function(app,fs){
  //default 화면
  app.get('/',function(req,res){
    res.render('index', {title:"My homepage", length:5});
  });
  //get api.static json data 조회/반환
  app.get('/list',function(req,res){
    fs.readFile(__dirname+"/../data/"+"user.json",'utf8',function(err,data){
      if(err) throw err;
      res.send(data);
    });
  });
  //get api.static user data 조회/반환
  app.get('/getUser/:username',function(req,res){
    fs.readFile(__dirname+"/../data/"+"user.json",'utf8',function(err,data){
      var users = JSON.parse(data);
      res.json(users[req.params.username])
    });
  });
  
}

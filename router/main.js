module.exports = function(app,fs){
  app.get('/',function(req,res){
    res.render('index', {title:"My homepage", length:5});
  });
  //get api. 조회
  app.get('/list',function(req,res){
    fs.readFile(__dirname+"/../data/"+"user.json",'utf8',function(err,data){
      if(err) throw err;
      res.send(data);
    });
  });
}

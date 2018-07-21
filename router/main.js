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
  //post api. user 정보 새로 생성
  app.post('/adduser/:username',function(req,res){
    var result = {};
    var username = req.params.username;
    //입력정보 유효성 검증
    if(!req.body["name"] || !req.body["passwd"]){
      result["success"]=0;
      result["error"]="invalid request";
      res.json(result);
      return;
    }
    //유저 추가
    fs.readFile(__dirname+"/../data/user.json",'utf8',function(err,data){
      var users = JSON.parse(data);
      //기존 유저 중복확인
      if(users[username]){
        result["success"]=0;
        result["error"]="duplicate";
        res.json(result);
        return;
      }
      //새 유저정보 생성
      users[username]=req.body;
      //새 유저정보 저장
      fs.writeFile(__dirname+"/../data/user.json",JSON.stringify(users,null,'\t'),'utf8',function(err,data){
        result["success"]=1;
        res.json(result);
      });
    });
  });
}

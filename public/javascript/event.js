$(function(){
  //ajax get. static json data 요청
  $('#readJson').click(function(){
    $.get('/list',function(data){
      $('#jsonResult').html(data);
    });
  });
  //ajax get. static user data 요청
  $('#search').on('keyup',function(e){
    if(e.keyCode===13){
      var username = $(this).val();
      $.get('/getUser/'+username,function(data){
        $('#userResult').html(data.name);
      });
    }
  });
  //ajax post. user 정보 생성 요청
  $('#submit').click(function(){
    name = $('#name').val();
    passwd = $('#password').val();
    if(name){
      $.post('/adduser/'+name,{'name':name,'passwd':passwd},function(data){
        if(data.success) alert("user add success");
        else alert(data.error);
      });
    }else{
      alert("write your name");
    }
  });
});

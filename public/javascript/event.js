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
});

$(function(){
  $('#readJson').click(function(){
    $.get('/list',function(data){
      $('#jsonResult').html(data);
    });
  });
});

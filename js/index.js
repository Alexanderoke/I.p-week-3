$(document).ready(function(){
  $(".dev").click(function(){
    $(".dev").hide();
    $(".devp").toggle();
    
  });
  $(".devp").click(function(){
    $(".dev").show();
    $(".devp").hide();
  });
});

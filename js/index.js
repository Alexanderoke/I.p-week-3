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
$(document).ready(function(){
  $(".product").click(function(){
    $(".product").hide();
    $(".prodp").toggle();
    
  });
  $(".prodp").click(function(){
    $(".product").show();
    $(".prodp").hide();
  });
});
$(document).ready(function(){
  $(".des").click(function(){
    $(".des").hide();
    $(".desp").toggle();
    
  });
  $(".desp").click(function(){
    $(".des").show();
    $(".desp").hide();
  });
});

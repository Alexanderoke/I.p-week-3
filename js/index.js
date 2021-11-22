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
$(document).ready(function(){
$(".img-fluid").hover(function(){
  $(this).css("border-color", "white");
  }, function(){
  $(this).css("border-color", "white");
});
});
$(document).ready(function(){
  $(".btn").click(function(){
var name= $("#name").val();
var txtarea =$("#txtarea").val();
var email= $("#email").val();

if(name=="" || txtarea=="" || email==""){
alert("Please enter your name, e-mail and message");
}
else {
alert(name +" "+ "we have received your message. Thank you for reaching out to us");
}
});
});


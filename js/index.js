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
function submit(){
var name= document.getElementById("name").value;
var txtarea = document.getElementById("txtarea").value;
var email= document.getElementById("email").value;

if(name=="" || txtarea=="" || email==""){
alert("Please enter your name, e-mail and message");
}
else {
alert(name + "we have received your message. Thank you for reaching out to us");
}
}


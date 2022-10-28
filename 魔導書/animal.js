$(document).ready(function(){
    $("#indeximage").click(function(){
        $("#indeximage").animate({left:'50%'},"slow");
        $("#indeximage1").animate({left:'-50%'},"slow");
      })
     $("#indeximage1").click(function(){
        $("#indeximage").animate({left:'0%'},"slow");
        $("#indeximage1").animate({left:'0%'},"slow");
      })
    })



$(document).ready(function () {

  $(".iphone-x").dblclick(function () {

    if($(".phone-screen").css("display") == "none"){
      $(".phone-screen").fadeToggle(500);
    }
  });

  $(".phone-right-side").click(function(){

    $(".phone-screen").fadeToggle(500);

  });



});

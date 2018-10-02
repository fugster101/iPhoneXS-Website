$(document).ready(function () {

  var date = new Date();

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  
  var day = weekday[date.getDay()];
  var daynumber = date.getDate();
  var month = month[date.getMonth()];


  var timeformat = date.getHours() + ":" + date.getMinutes();
  var dayFormat = day + " " + daynumber + " " + month;

  $("#phone-time").html(timeformat);
  $("#phone-date").html(dayFormat);



  $(".iphone-x").dblclick(function () {

    if($(".phone-screen").css("display") == "none"){
      $(".phone-screen").fadeToggle(500);
    }
  });

  $(".phone-right-side").click(function(){
    $(".phone-screen").fadeToggle(500);
  });
});

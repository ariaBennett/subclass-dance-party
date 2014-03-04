$(document).ready(function(){
  window.dancers = [];

  // Blinky Dancer
  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  // Slow Dancer
  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new SlowDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 2000
    );
    $('body').append(dancer.$node);
  });
  // Growing Dancer
  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new GrowingDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 3000
    );
    $('body').append(dancer.$node);
  });
  // Sanic Dancer
  $(".addSanicDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new SanicCharacterDancer(
      $("#danceFloor").height() * Math.random(),
      $("#danceFloor").width() * Math.random(),
      Math.random() * 3000
    );
    $('#danceFloor').append(dancer.$node);
  });
});



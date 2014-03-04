$(document).ready(function(){
  window.dancers = [];

  // Blinky Dancer
  $(".dancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      (((window.innerHeight * Math.random()) / window.innerHeight) * 100) + "%",
      (((window.innerWidth * Math.random()) / window.innerWidth) * 100) + "%",
      Math.random() * 1000
    );
    dancer.step();
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUpButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });
});



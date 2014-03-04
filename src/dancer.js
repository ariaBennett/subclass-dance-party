/* global $*/
// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

};


Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  console.log("Dancer", this);
  var boundStep = this;
  setTimeout(function() {
    boundStep.step();
  }, 7000);
};


Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  var styleSettings = {
    left : '2%'
   //top : '2%'};
  };
  this.$node.css(styleSettings);
};

var SanicCharacterDancer = function(top, left, timeBetweenSteps){

 // console.log(this.$node);

  this.$node = $('<img style="position: fixed; width: 4%; height: 8%;" src="./dancers/sanic.png"></img>');
  this.setPosition();
  this.speed = 500;
//  console.log(this.$node);
  this.musik = $('<embed width="50" height="50" src="sanic.mp3">');
  document.body.appendChild(this.musik[0]);
  CharacterDancer.call(this, top, left, timeBetweenSteps);
};

SanicCharacterDancer.prototype = Object.create(CharacterDancer.prototype);
SanicCharacterDancer.prototype.constructor = SanicCharacterDancer;

SanicCharacterDancer.prototype.setPosition = function(){
  this.$node[0].style.top = "62%";
  this.$node[0].style.left = "1%";
}

SanicCharacterDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var that = this;
  that.$node.animateRotate(0, 1);
  var alreadySpinned = false;
  this.$node[0].style.top = "62%";
  this.$node[0].style.left = "1%";
  var moveLeft1 = function() {
    that.$node.animate({
        left: "+=11%"
    }, that.speed, function() {
      moveLeft2();
    });
  };
  var moveLeft2 = function() {
    that.$node.animate({
        left: "+=11%",
        top: "+=3.3%"
    }, that.speed, function() {
      moveLeft3();
    });
  };
  var moveLeft3 = function() {
    that.$node.animate({
        left: "+=14%",
        top: "+=10%"
    }, that.speed, function() {
      moveLeft4();
    });
  };
  var moveLeft4 = function() {
    that.$node.animate({
        left: "+=31%",
        top: "-=2%"
    }, that.speed, function() {
      that.$node.animateRotate(-270, 1500);
      moveLeft5();
    });
  };
  var moveLeft5 = function() {
    window.test = that.$node;
    that.$node.animate({
        left: "+=15%",
        top: "-=20%",
    }, that.speed, function() {
      moveLeft6();
    });
  };
  var moveLeft6 = function() {
    window.test = that.$node;
    that.$node.animate({
        left: "-=13%",
        top: "-=20%",
    }, that.speed, function() {
      moveLeft7();
    });
  };
  var moveLeft7 = function() {
    window.test = that.$node;
    that.$node.animate({
        left: "-=12%",
        top: "+=20%",
    }, that.speed, function() {
      moveLeft8();
    });
  };
  var moveLeft8 = function() {
    window.test = that.$node;
    that.$node.animate({
        top: "+=60%"
    }, that.speed /2, function() {
    });
  };

moveLeft1();
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

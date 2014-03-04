var SanicCharacterDancer = function(top, left, timeBetweenSteps){
  CharacterDancer.call(this, top, left, timeBetweenSteps);

 // console.log(this.$node);

  this.$node = $('<img style="position: absolute; width="4%"; height="8%" src="./dancers/sanic.png"></img>');
//  console.log(this.$node);
  this.$node[0].style.top = "62%";
  this.$node[0].style.left = "1%";
  this.musik = $('<embed width="50" height="50" src="sanic.mp3">');
  document.body.appendChild(this.musik[0]);
};

SanicCharacterDancer.prototype = Object.create(CharacterDancer.prototype);
SanicCharacterDancer.prototype.constructor = SanicCharacterDancer;

SanicCharacterDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var that = this;
  console.log("SanicCharacterDancer", this);
  that.$node[0].style.marginLeft = "0";
  that.$node[0].style.marginTop = "0";
  var moveLeft1 = function() {
  console.log("mv1");
    that.$node.animate({
        marginLeft: "+=11%"
    }, 1000, function() {
      moveLeft2();
    });
  };
  var moveLeft2 = function() {
  console.log("mv2");
    that.$node.animate({
        marginLeft: "+=11%",
        marginTop: "+=1.5%"
    }, 1000, function() {
      moveLeft3();
    });
  };
  var moveLeft3 = function() {
  console.log("mv3");
    that.$node.animate({
        marginLeft: "+=11%",
        marginTop: "+=3%"
    }, 1000, function() {
    });
  };

moveLeft1();
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

var SanicCharacterDancer = function(top, left, timeBetweenSteps){
  CharacterDancer.call(this, top, left, timeBetweenSteps);

    var top = this.$node[0].style.top;
    var left = this.$node[0].style.left;
 // console.log(this.$node);

  this.$node = $('<img style="position: absolute;" src="./dancers/sanic.png"></img>');
//  console.log(this.$node);
    this.$node[0].style.top = top;
    this.$node[0].style.left = left;
};

SanicCharacterDancer.prototype = Object.create(CharacterDancer.prototype);
SanicCharacterDancer.prototype.constructor = SanicCharacterDancer;

SanicCharacterDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

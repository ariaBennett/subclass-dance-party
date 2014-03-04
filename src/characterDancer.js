var CharacterDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

CharacterDancer.prototype = Object.create(Dancer.prototype);
CharacterDancer.prototype.constructor = CharacterDancer;

CharacterDancer.prototype.step = function(){

    console.log("CharacterDancer");
  Dancer.prototype.step.call(this);
};

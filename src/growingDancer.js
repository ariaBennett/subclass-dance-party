var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.constructor = GrowingDancer;

GrowingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  this.$node.toggle();
};

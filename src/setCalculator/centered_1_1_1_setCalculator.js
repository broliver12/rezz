function centered_1_1_1_setCalculator(){
  middleBlockSet[0] = middleBlockCounter.counter;
  innerRingSet[0] = innerRingCounter.counter;
  outerRingSet[0] = outerRingCounter.counter;
}

function centered_1_1_1_reflect_setCalculator(){
  middleBlockSet[0] = middleBlockCounter.counter;
  //middleBlockSet[1] = middleBlockCounter.getOppositeVal(middleBlockSet[0]);
  innerRingSet[0] = innerRingCounter.counter;
  innerRingSet[1] = innerRingCounter.getOppositeVal(innerRingSet[0]);
  outerRingSet[0] = outerRingCounter.counter;
  outerRingSet[1] = outerRingCounter.getOppositeVal(outerRingSet[0]);

}

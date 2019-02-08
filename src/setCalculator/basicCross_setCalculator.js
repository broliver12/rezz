function basicCross_setCalculator(){

  let innerRingQuarterOffset = 4;
  let outerRingQuarterOffset = 6;
  
  middleBlockSet[0] = middleBlockCounter.counter;
  middleBlockSet[1] = middleBlockCounter.getOppositeVal(middleBlockSet[0]);

  innerRingSet[0] = innerRingCounter.counter;
  innerRingSet[1] = innerRingCounter.getOppositeVal(innerRingSet[0]);
  innerRingSet[2] = innerRingCounter.getNextVal(innerRingQuarterOffset);
  innerRingSet[3] = innerRingCounter.getOppositeVal(innerRingSet[2]);

  outerRingSet[0] = outerRingCounter.counter;
  outerRingSet[1] = outerRingCounter.getOppositeVal(outerRingSet[0]);
  outerRingSet[2] = outerRingCounter.getNextVal(outerRingQuarterOffset);
  outerRingSet[3] = outerRingCounter.getOppositeVal(outerRingSet[2]);

}

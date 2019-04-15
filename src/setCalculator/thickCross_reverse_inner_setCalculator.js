function thickCross_reverse_inner_setCalculator(){

  let innerRingQuarterOffset = 4;
  let outerRingQuarterOffset = 6;

  middleBlockSet = [0,1,2,3];
  // middleBlockSet[0] = middleBlockCounter.counter;
  // middleBlockSet[1] = middleBlockCounter.getOppositeVal(middleBlockSet[0]);

if(direction == 1){
  innerRingSet[0] = innerRingCounter.counter;
  innerRingSet[1] = innerRingCounter.getOppositeVal(innerRingSet[0]);
  innerRingSet[2] = innerRingCounter.getNextVal(innerRingQuarterOffset);
  innerRingSet[3] = innerRingCounter.getOppositeVal(innerRingSet[2]);
} else {
  innerRingSet[0] = innerRingCounter.counter;
  innerRingSet[1] = innerRingCounter.getOppositeVal(innerRingSet[0]);
  innerRingSet[2] = innerRingCounter.getPrevVal(innerRingQuarterOffset);
  innerRingSet[3] = innerRingCounter.getOppositeVal(innerRingSet[2]);
}



  outerRingSet[0] = outerRingCounter.getPrevVal(1);
  outerRingSet[1] = outerRingCounter.counter;
  outerRingSet[2] = outerRingCounter.getNextVal(1);
  outerRingSet[3] = outerRingCounter.getOppositeVal(outerRingSet[0]);
  outerRingSet[4] = outerRingCounter.getOppositeVal(outerRingSet[1]);
  outerRingSet[5] = outerRingCounter.getOppositeVal(outerRingSet[2]);

  outerRingSet[6] = outerRingCounter.getNextVal(innerRingQuarterOffset+1);
  outerRingSet[7] = outerRingCounter.getNextVal(innerRingQuarterOffset+2);
  outerRingSet[8] = outerRingCounter.getNextVal(innerRingQuarterOffset+3);
  outerRingSet[9] = outerRingCounter.getOppositeVal(outerRingSet[6]);
  outerRingSet[10] = outerRingCounter.getOppositeVal(outerRingSet[7]);
  outerRingSet[11] = outerRingCounter.getOppositeVal(outerRingSet[8]);

}

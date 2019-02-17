function ccw_offset_1_3_5_setCalculator() {

  if (direction == 1) {
    middleBlockSet[0] = middleBlockCounter.getNextVal(1);
  } else {
    middleBlockSet[0] = middleBlockCounter.counter;
  }
  middleBlockSet[1] = middleBlockCounter.getOppositeVal(middleBlockSet[0]);

  innerRingSet[0] = innerRingCounter.counter;
  innerRingSet[1] = innerRingCounter.getPrevVal(1);
  innerRingSet[2] = innerRingCounter.getPrevVal(2);
  innerRingSet[3] = innerRingCounter.getOppositeVal(innerRingSet[0]);
  innerRingSet[4] = innerRingCounter.getOppositeVal(innerRingSet[1]);
  innerRingSet[5] = innerRingCounter.getOppositeVal(innerRingSet[2]);

  outerRingSet[0] = outerRingCounter.getPrevVal(2);
  outerRingSet[1] = outerRingCounter.getPrevVal(3);
  outerRingSet[2] = outerRingCounter.getPrevVal(4);
  outerRingSet[3] = outerRingCounter.getPrevVal(5);
  outerRingSet[4] = outerRingCounter.getPrevVal(6);
  outerRingSet[5] = outerRingCounter.getOppositeVal(outerRingSet[0]);
  outerRingSet[6] = outerRingCounter.getOppositeVal(outerRingSet[1]);
  outerRingSet[7] = outerRingCounter.getOppositeVal(outerRingSet[2]);
  outerRingSet[8] = outerRingCounter.getOppositeVal(outerRingSet[3]);
  outerRingSet[9] = outerRingCounter.getOppositeVal(outerRingSet[4]);



}

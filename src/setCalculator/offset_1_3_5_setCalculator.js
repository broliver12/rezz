function offset_1_3_5_setCalculator() {

  middleBlockSet[0] = middleBlockCounter.getNextVal(1);
  middleBlockSet[1] = middleBlockCounter.getOppositeVal(middleBlockSet[0]);

  innerRingSet[0] = innerRingCounter.counter;
  innerRingSet[1] = innerRingCounter.getNextVal(1);
  innerRingSet[2] = innerRingCounter.getNextVal(2);
  innerRingSet[3] = innerRingCounter.getOppositeVal(innerRingSet[0]);
  innerRingSet[4] = innerRingCounter.getOppositeVal(innerRingSet[1]);
  innerRingSet[5] = innerRingCounter.getOppositeVal(innerRingSet[2]);

  outerRingSet[0] = outerRingCounter.getNextVal(2);
  outerRingSet[1] = outerRingCounter.getNextVal(3);
  outerRingSet[2] = outerRingCounter.getNextVal(4);
  outerRingSet[3] = outerRingCounter.getNextVal(5);
  outerRingSet[4] = outerRingCounter.getNextVal(6);
  outerRingSet[5] = outerRingCounter.getOppositeVal(outerRingSet[0]);
  outerRingSet[6] = outerRingCounter.getOppositeVal(outerRingSet[1]);
  outerRingSet[7] = outerRingCounter.getOppositeVal(outerRingSet[2]);
  outerRingSet[8] = outerRingCounter.getOppositeVal(outerRingSet[3]);
  outerRingSet[9] = outerRingCounter.getOppositeVal(outerRingSet[4]);
}

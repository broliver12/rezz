function centered_2_2_3_setCalculator() {

  middleBlockSet[0] = middleBlockCounter.counter;
  middleBlockSet[1] = middleBlockCounter.getNextVal(1);

  innerRingSet[0] = innerRingCounter.counter;
  innerRingSet[1] = innerRingCounter.getNextVal(1);

  // outerRingSet[0] = outerRingCounter.counter;
  // outerRingSet[1] = outerRingCounter.getNextVal();

  outerRingSet[0] = outerRingCounter.getPrevVal(1);
  //outerRingSet[0] = outerRingCounter.counter;
  outerRingSet[1] = outerRingCounter.counter;
  outerRingSet[2] = outerRingCounter.getNextVal(1);

}

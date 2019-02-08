function centered_2_3_5_setCalculator() {

  middleBlockSet[0] = middleBlockCounter.counter;
  if(direction == 1){
    middleBlockSet[1] = middleBlockCounter.getPrevVal(1);
  } else {
    middleBlockSet[1] = middleBlockCounter.getNextVal(1);
  }

  innerRingSet[0] = innerRingCounter.getPrevVal(1);
  innerRingSet[1] = innerRingCounter.counter;
  innerRingSet[2] = innerRingCounter.getNextVal(1);

  outerRingSet[0] = outerRingCounter.getPrevVal(2);
  outerRingSet[1] = outerRingCounter.getPrevVal(1);
  outerRingSet[2] = outerRingCounter.counter;
  outerRingSet[3] = outerRingCounter.getNextVal(1);
  outerRingSet[4] = outerRingCounter.getNextVal(2);

}

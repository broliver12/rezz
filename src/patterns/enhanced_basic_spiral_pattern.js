function enhanced_basic_spiral_pattern(color) {

  //middleBlockLogic()
  leftMiddleBlockArray[middleBlockCounter.counter].color = color;
  rightMiddleBlockArray[middleBlockCounter.counter].color = color;

  for (let i = 0; i < 4; i++) {
    if (i != middleBlockCounter.counter) {
      leftMiddleBlockArray[i].color = offColor;
      rightMiddleBlockArray[i].color = offColor;
    }
  }

  //innerRingLogic
  leftInnerRingArray[innerRingCounter.counter].color = color;
  rightInnerRingArray[innerRingCounter.counter].color = color;

  for (let i = 0; i < 16; i++) {
    if (i != innerRingCounter.counter) {
      leftInnerRingArray[i].color = offColor;
      rightInnerRingArray[i].color = offColor;
    }
  }

  //outerRinglogic
  leftOuterRingArray[outerRingCounter.counter].color = color;
  rightOuterRingArray[outerRingCounter.counter].color = color;

  for (let i = 0; i < 24; i++) {
    if (i != outerRingCounter.counter) {
      leftOuterRingArray[i].color = offColor;
      rightOuterRingArray[i].color = offColor;
    }
  }

}

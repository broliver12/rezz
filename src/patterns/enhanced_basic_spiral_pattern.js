function enhanced_basic_spiral_pattern(color) {
  var color_middle = color[0];
  var color_inner = color[1];
  var color_outer = color[2];
  //middleBlockLogic()
  leftMiddleBlockArray[middleBlockCounter.counter].color = color_middle;
  rightMiddleBlockArray[middleBlockCounter.counter].color = color_middle;

  for (let i = 0; i < 4; i++) {
    if (i != middleBlockCounter.counter) {
      leftMiddleBlockArray[i].color = offColor;
      rightMiddleBlockArray[i].color = offColor;
    }
  }

  //innerRingLogic
  leftInnerRingArray[innerRingCounter.counter].color = color_inner;
  rightInnerRingArray[innerRingCounter.counter].color = color_inner;

  for (let i = 0; i < 16; i++) {
    if (i != innerRingCounter.counter) {
      leftInnerRingArray[i].color = offColor;
      rightInnerRingArray[i].color = offColor;
    }
  }

  //outerRinglogic
  leftOuterRingArray[outerRingCounter.counter].color = color_outer;
  rightOuterRingArray[outerRingCounter.counter].color = color_outer;

  for (let i = 0; i < 24; i++) {
    if (i != outerRingCounter.counter) {
      leftOuterRingArray[i].color = offColor;
      rightOuterRingArray[i].color = offColor;
    }
  }

}

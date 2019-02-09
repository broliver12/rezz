function basic_spiral_pattern() {

  var color_middle = color[0];
  var color_inner = color[1];
  var color_outer = color[2];

  //middleBlockLogic()
  leftMiddleBlockArray[middleBlockCounter.counter].color = 'red';
  rightMiddleBlockArray[middleBlockCounter.counter].color = 'red';

  for (let i = 0; i < 4; i++) {
    if (i != middleBlockCounter.counter) {
      leftMiddleBlockArray[i].color = offColor;
      rightMiddleBlockArray[i].color = offColor;
    }
  }

  //innerRingLogic
  leftInnerRingArray[innerRingCounter.counter].color = 'red';
  rightInnerRingArray[innerRingCounter.counter].color = 'red';

  for (let i = 0; i < 16; i++) {
    if (i != innerRingCounter.counter) {
      leftInnerRingArray[i].color = offColor;
      rightInnerRingArray[i].color = offColor;
    }
  }

  //outerRinglogic
  leftOuterRingArray[outerRingCounter.counter].color = 'red';
  rightOuterRingArray[outerRingCounter.counter].color = 'red';

  for (let i = 0; i < 24; i++) {
    if (i != outerRingCounter.counter) {
      leftOuterRingArray[i].color = offColor;
      rightOuterRingArray[i].color = offColor;
    }
  }

}

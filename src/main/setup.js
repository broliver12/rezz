function setupLeftMiddleBlock() {

  //as
  //23
  //10

  const x_led1 = leftEyePosition_x + middleBlockCenterOffset;
  const y_led1 = leftEyePosition_y + middleBlockCenterOffset;

  const x_led2 = leftEyePosition_x - leftOffset - middleBlockCenterOffset;
  const y_led2 = leftEyePosition_y + middleBlockCenterOffset;

  const x_led3 = leftEyePosition_x - leftOffset - middleBlockCenterOffset;
  const y_led3 = leftEyePosition_y - upOffset - middleBlockCenterOffset;

  const x_led4 = leftEyePosition_x + middleBlockCenterOffset;
  const y_led4 = leftEyePosition_y - upOffset - middleBlockCenterOffset;

  leftMiddleBlockArray = [new LED('red', 0, x_led1, y_led1), new LED('red', 1, x_led2, y_led2),
    new LED('blue', 2, x_led3, y_led3), new LED('red', 3, x_led4, y_led4)
  ];
}

function setupRightMiddleBlock() {

  const x_led1 = rightEyePosition_x + middleBlockCenterOffset;
  const y_led1 = rightEyePosition_y + middleBlockCenterOffset;

  const x_led2 = rightEyePosition_x - leftOffset - middleBlockCenterOffset;
  const y_led2 = rightEyePosition_y + middleBlockCenterOffset;

  const x_led3 = rightEyePosition_x - leftOffset - middleBlockCenterOffset;
  const y_led3 = rightEyePosition_y - upOffset - middleBlockCenterOffset;

  const x_led4 = rightEyePosition_x + middleBlockCenterOffset;
  const y_led4 = rightEyePosition_y - upOffset - middleBlockCenterOffset;

  rightMiddleBlockArray = [new LED('red', 0, x_led1, y_led1), new LED('red', 1, x_led2, y_led2),
    new LED('blue', 2, x_led3, y_led3), new LED('red', 3, x_led4, y_led4)
  ];
}

function setupInnerRings() {

  rightInnerRingArray = new Array(16);
  leftInnerRingArray = new Array(16);

  for (let i = 0; i < 16; i++) {
    let xOffset = innerRingRadius * Math.cos(i * (PI / 8));
    let yOffset = innerRingRadius * Math.sin(i * (PI / 8));
    rightInnerRingArray[i] = new LED('green', i + 4, rightEyePosition_x - (leftOffset / 2) + xOffset, rightEyePosition_y - (upOffset / 2) + yOffset, ledSize, ledSize);
    leftInnerRingArray[i] = new LED('green', i + 4, leftEyePosition_x - (leftOffset / 2) + xOffset, leftEyePosition_y - (upOffset / 2) + yOffset, ledSize, ledSize);

  }
}

function setupOuterRings() {

  leftOuterRingArray = new Array(16);
  rightOuterRingArray = new Array(16);

  for (let i = 0; i < 24; i++) {
    let xOffset = outerRingRadius * Math.cos(i * (PI / 12));
    let yOffset = outerRingRadius * Math.sin(i * (PI / 12));
    leftOuterRingArray[i] = new LED('blue', i + 20, leftEyePosition_x - (leftOffset / 2) + xOffset, leftEyePosition_y - (upOffset / 2) + yOffset);
    rightOuterRingArray[i] = new LED('yellow', i + 20, rightEyePosition_x - (leftOffset / 2) + xOffset, rightEyePosition_y - (upOffset / 2) + yOffset);

  }
}

function setupControlPanel() {
  // document.getElementById("changePatternButton").addEventListener("click", function() {
  //   patternManager.changePattern();
  // });
  // document.getElementById("changeSpeedButton").addEventListener("click", function(){
  //   setTimeUnit((timeUnit - 50)/10 + 10)
  // });
  canvas.parent('sketch');
}

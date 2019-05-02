

function setup() {

  canvas = createCanvas(width, height);
  background(backgroundColor);
  // drawGuidelines();

  setupLeftMiddleBlock();
  setupRightMiddleBlock();
  setupInnerRings();
  setupOuterRings();

  setupCounters();

  leftEyeArray = leftMiddleBlockArray.concat(leftInnerRingArray, leftOuterRingArray);
  rightEyeArray = rightMiddleBlockArray.concat(rightInnerRingArray, rightOuterRingArray);

  patternManager = new PatternManager(addPatterns());
  setupCustomLists();

  setupControlPanel();
}

function draw() {

  handleCounters();
  patternManager.update();
  drawGlasses();

}

function drawGuidelines() {
  stroke('yellow');
  line(leftEyePosition_x - (leftOffset / 2), 0, leftEyePosition_x - (leftOffset / 2), height);
  line(rightEyePosition_x - (leftOffset / 2), 0, rightEyePosition_x - (leftOffset / 2), height);
  line(0, leftEyePosition_y - (upOffset / 2), width, leftEyePosition_y - (upOffset / 2));
  stroke('black');
}

function drawGlasses() {

  leftMiddleBlockArray[0].drawLED();
  leftMiddleBlockArray[1].drawLED();
  leftMiddleBlockArray[2].drawLED();
  leftMiddleBlockArray[3].drawLED();

  rightMiddleBlockArray[0].drawLED();
  rightMiddleBlockArray[1].drawLED();
  rightMiddleBlockArray[2].drawLED();
  rightMiddleBlockArray[3].drawLED();

  for (let i = 0; i < 16; i++) {
    leftInnerRingArray[i].drawLED();
    rightInnerRingArray[i].drawLED();
  }

  for (let i = 0; i < 24; i++) {
    leftOuterRingArray[i].drawLED();
    rightOuterRingArray[i].drawLED();
  }
}

const width = 700;
const height = 580;
const backgroundColor = 151;
const offColor = 'black';


const leftEyePosition_x = 200;
const leftEyePosition_y = 300;

const rightEyePosition_x = 500;
const rightEyePosition_y = 300;

const innerRingRadius = 70;
const outerRingRadius = 120;

const middleBlockCenterOffset = 5;


const ledSize = 20;

let leftMiddleBlockArray;
let leftInnerRingArray;
let leftOuterRingArray;

let rightMiddleBlockArray;
let rightInnerRingArray;
let rightOuterRingArray;

//should contain ids 0-23
let leftEyeArray;
let rightEyeArray;

let patternManager;
let canvas;

let direction = 0;
//Designed as:
//01
//23

const leftOffset = 20;
const upOffset = 20;

const SyncPatternEnum = {
  COUNTER_SYNC: 0,
  SIDE_SYNC: 1
}

function setup() {

  canvas = createCanvas(width, height);
  background(backgroundColor);
  drawGuidelines();

  setupLeftMiddleBlock();
  setupRightMiddleBlock();
  setupInnerRings();
  setupOuterRings();

  leftEyeArray = leftMiddleBlockArray.concat(leftInnerRingArray, leftOuterRingArray);
  rightEyeArray = rightMiddleBlockArray.concat(rightInnerRingArray, rightOuterRingArray);

  //pattern = new Pattern();
  let spiral_pattern = new Pattern(['lightgreen'], spiral_with_sets_pattern, centered_1_1_1_reflect_setCalculator);
  let quarter_pattern = new Pattern(['blue'], spiral_with_sets_pattern, centered_2_3_5_setCalculator);
  let patterns = [spiral_pattern, quarter_pattern];
  patternManager = new PatternManager(patterns);

  setupControlPanel();
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

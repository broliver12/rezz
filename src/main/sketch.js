const width = 700;
const height = 380;
const backgroundColor = 30;
const offColor = 'black';
const leftEyePosition_x = 200;
const leftEyePosition_y = 200;
const rightEyePosition_x = 500;
const rightEyePosition_y = 200;
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

const PresetPatternState = {
    PRESTART: 0,
    STARTED: 1,
    PAUSED: 2,
    STOPPED: 3
  }

function setup() {

  canvas = createCanvas(width, height);
  background(backgroundColor);
  // drawGuidelines();

  setupLeftMiddleBlock();
  setupRightMiddleBlock();
  setupInnerRings();
  setupOuterRings();

  leftEyeArray = leftMiddleBlockArray.concat(leftInnerRingArray, leftOuterRingArray);
  rightEyeArray = rightMiddleBlockArray.concat(rightInnerRingArray, rightOuterRingArray);
  
  patternManager = new PatternManager(addPatterns());
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

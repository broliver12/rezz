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
var middleBlockColorId = "mbid";
var innerRingColorId = "irid";
var outerRingColorId = "orid";

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

let timeUnit = 100;
let middleBlockTimeUnit = timeUnit * 6;
let innerRingTimeUnit = timeUnit * 3 / 2;
let outerRingTimeUnit = timeUnit;

var outerRingCounter;
var innerRingCounter;
var middleBlockCounter;

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

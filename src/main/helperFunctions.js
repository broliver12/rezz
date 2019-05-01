function changeDir() {
  if (direction == 1) {
    direction = 0;
  } else {
    direction = 1;
  }
  middleBlockCounter.resetCounter();
  innerRingCounter.resetCounter();
  outerRingCounter.resetCounter();
}

function setMiddleBlockColor(col) {
  patternManager.currentPattern.color[0] = col.textContent;
}

function setInnerRingColor(col) {
  patternManager.currentPattern.color[1] = col.textContent;
}

function setOuterRingColor(col) {
  patternManager.currentPattern.color[2] = col.textContent;
}

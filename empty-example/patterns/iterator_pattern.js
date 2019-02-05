function iterator_Pattern() {
  leftEyeArray[iteratorPatternCounter.counter].color = 'red';
  rightEyeArray[iteratorPatternCounter.counter].color = 'red';
  for (let i = 0; i < 44; i++) {
    if (i != iteratorPatternCounter.counter) {
      rightEyeArray[i].color = offColor;
      leftEyeArray[i].color = offColor;
    }
  }
}

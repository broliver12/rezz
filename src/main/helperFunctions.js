function changeDir(){
    if(direction == 1){
      direction = 0;
    } else {
      direction = 1;
    }
    middleBlockCounter.resetCounter();
    innerRingCounter.resetCounter();
    outerRingCounter.resetCounter();
    print("direciton " + direction);
}

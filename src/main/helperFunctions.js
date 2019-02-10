function changeDir(){
    if(direction == 1){
      direction = 0;
    } else {
      direction = 1;
    }
    middleBlockCounter.resetCounter();
    innerRingCounter.resetCounter();
    outerRingCounter.resetCounter();
}

function setMiddleBlockColor() {
  var colorList = document.getElementById("changeColorList_middle");
  patternManager.currentPattern.color[0] = colorList.options[colorList.selectedIndex].text;
}

function setInnerRingColor() {
  var colorList = document.getElementById("changeColorList_inner");
  patternManager.currentPattern.color[1] = colorList.options[colorList.selectedIndex].text;
}

function setOuterRingColor() {
  var colorList = document.getElementById("changeColorList_outer");
  patternManager.currentPattern.color[2] = colorList.options[colorList.selectedIndex].text;
}

function generalGetNextVal(){

}

function generalGetPrevVal(){
  
}

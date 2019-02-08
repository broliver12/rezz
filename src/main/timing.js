let timeUnit = 120;

var basicCounter = new Counter(timeUnit,10);

let middleBlockTimeUnit = timeUnit*6;
let innerRingTimeUnit = timeUnit*3/2;
let outerRingTimeUnit = timeUnit;

var outerRingCounter = new Counter(outerRingTimeUnit, 23);
var innerRingCounter = new Counter(innerRingTimeUnit, 15);
var middleBlockCounter = new Counter(middleBlockTimeUnit, 3);
var iteratorPatternCounter = new Counter(timeUnit, 44);
//
// outerRingCounter.setDivisions(2, 8, 14, 20);
// innerRingCounter.setDivisions(1, 5, 9, 13);
// middleBlockCounter.setDivisions(0, 1, 2, 3);

// outerRingCounter.setDivisions(2, 8, 14, 20);
// innerRingCounter.setDivisions(1, 5, 9, 13);
// middleBlockCounter.setDivisions(0, 1, 2, 3);

// outerRingCounter.addChild(innerRingCounter);
// outerRingCounter.addChild(middleBlockCounter);

middleBlockCounter.addChild(innerRingCounter);
middleBlockCounter.addChild(outerRingCounter);

function setSyncPattern(syncPattern){

  switch(syncPattern){
    case "counterSync":
    outerRingCounter.setDivisions(2, 8, 14, 20);
    innerRingCounter.setDivisions(1, 5, 9, 13);
    middleBlockCounter.setDivisions(0, 1, 2, 3);

    break;
    case "centeredSideSync":
    outerRingCounter.setDivisions(2, 8, 14, 20);
    innerRingCounter.setDivisions(1, 5, 9, 13);
    middleBlockCounter.setDivisions(0, 1, 2, 3);

    break;
    default:
    print("here1");
    outerRingCounter.setDivisions(2, 8, 14, 20);
    innerRingCounter.setDivisions(1, 5, 9, 13);
    middleBlockCounter.setDivisions(0, 1, 2, 3);

  }


}

function handleCounters(){

  let curTime = millis();

  outerRingCounter.update(curTime);
  innerRingCounter.update(curTime);
  middleBlockCounter.update(curTime);
  //iteratorPatternCounter.update(curTime);

}


function incrementSets(){

  // const middleBlockSetSize = middleBlockSet.length;
  // const innerRingSetSize = innerRingSet.length;
  // const outerRingSetSize = outerRingSet.length;

  for(let i=0; i<middleBlockSet.length; i++){
    if(middleBlockSet[i]==middleBlockCounter.resetValue+1){
      middleBlockSet[i]=0;
    } else {
      middleBlockSet[i]++;
    }
  }

  for(let i=0; i<innerRingSet.length; i++){
    if(innerRingSet[i]==innerRingCounter.resetValue+1){
      innerRingSet[i]=0;
    } else {
      innerRingSet[i]++;
    }
  }

  for(let i=0; i<outerRingSet.length; i++){
    if(outerRingSet[i]==outerRingCounter.resetValue+1){
      outerRingSet[i]=0;
    } else {
      outerRingSet[i]++;
    }
  }

}

function setTimeUnit(inputVal){
  timeUnit = 50 + 10*inputVal;
  print("setting time unit to " + timeUnit)
}

function changeSpeed(){
  //do calculation here
  var userTimeVal = document.getElementById("speedSlider").valueAsNumber;
  var tu = 50 + 101 - userTimeVal;
  var mbtu = tu*6;
  var irtu = tu*3/2;
  var ortu = tu;

  // basicCounter.speedChanged(tu);
  outerRingCounter.speedChanged(ortu);
  innerRingCounter.speedChanged(irtu);
  middleBlockCounter.speedChanged(mbtu);
}

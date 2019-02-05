let timeUnit = 100;

let basicCounter = new Counter(timeUnit,10);

let middleBlockTimeUnit = timeUnit*6;
let innerRingTimeUnit = timeUnit*3/2;
let outerRingTimeUnit = timeUnit;

let outerRingCounter = new Counter(outerRingTimeUnit, 23);
let innerRingCounter = new Counter(innerRingTimeUnit, 15);
let middleBlockCounter = new Counter(middleBlockTimeUnit, 3);
let iteratorPatternCounter = new Counter(timeUnit, 44);
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

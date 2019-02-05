function spiral_with_sets_pattern(color) {
  for(let i=0; i < middleBlockSet.length; i++){
    leftMiddleBlockArray[middleBlockSet[i]].color = color;
    rightMiddleBlockArray[middleBlockSet[i]].color = color;
  }

  for(let i=0; i<4; i++){
    if(!middleBlockSet.includes(i)){
      leftMiddleBlockArray[i].color = offColor;
      rightMiddleBlockArray[i].color = offColor;
    }
  }

  for(let i=0; i < innerRingSet.length; i++){
    leftInnerRingArray[innerRingSet[i]].color = color;
    rightInnerRingArray[innerRingSet[i]].color = color;
  }

  for(let i=0; i<16; i++){
    if(!innerRingSet.includes(i)){
      leftInnerRingArray[i].color = offColor;
      rightInnerRingArray[i].color = offColor;
    }
  }

  for(let i=0; i < outerRingSet.length; i++){
    //print("ors - " + outerRingSet[i]);
    leftOuterRingArray[outerRingSet[i]].color = color;
    rightOuterRingArray[outerRingSet[i]].color = color;
  }

  for(let i=0; i<24; i++){
    if(!outerRingSet.includes(i)){
      leftOuterRingArray[i].color = offColor;
      rightOuterRingArray[i].color = offColor;
    }
  }
}

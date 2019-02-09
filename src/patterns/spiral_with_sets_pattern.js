function spiral_with_sets_pattern(color) {

  var color_middle = color[0];
  var color_inner = color[1];
  var color_outer = color[2];

  for(let i=0; i < middleBlockSet.length; i++){
    leftMiddleBlockArray[middleBlockSet[i]].color = color_middle;
    rightMiddleBlockArray[middleBlockSet[i]].color = color_middle;
  }

  for(let i=0; i<4; i++){
    if(!middleBlockSet.includes(i)){
      leftMiddleBlockArray[i].color = offColor;
      rightMiddleBlockArray[i].color = offColor;
    }
  }

  for(let i=0; i < innerRingSet.length; i++){
    leftInnerRingArray[innerRingSet[i]].color = color_inner;
    rightInnerRingArray[innerRingSet[i]].color = color_inner;
  }

  for(let i=0; i<16; i++){
    if(!innerRingSet.includes(i)){
      leftInnerRingArray[i].color = offColor;
      rightInnerRingArray[i].color = offColor;
    }
  }

  for(let i=0; i < outerRingSet.length; i++){
    leftOuterRingArray[outerRingSet[i]].color = color_outer;
    rightOuterRingArray[outerRingSet[i]].color = color_outer;
  }

  for(let i=0; i<24; i++){
    if(!outerRingSet.includes(i)){
      leftOuterRingArray[i].color = offColor;
      rightOuterRingArray[i].color = offColor;
    }
  }
}

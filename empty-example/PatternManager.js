let middleBlockSet;
let innerRingSet;
let outerRingSet;

class PatternManager {

  constructor(patterns){
    this.patterns = patterns

    this.currentPattern = patterns[0];
    this.currentPatternNumber = 0;
    middleBlockSet = [];
    innerRingSet = [];
    outerRingSet = [];
    setSyncPattern("default!")
    print("things set");
    // this.middleBlockSet = [];
    // this.innerRingSet = [];
    // this.outerRingSet = [];
    // middleBlockSet=[0,1];
    // innerRingSet=[0,1];
    //
  }

  // updateSets(mbs , irs, ors){
  //   middleBlockSet = mbs;
  //   innerRingSet = irs;
  //   middleBlockSet = ors;
  // }

  setColor(){
    var colorList = document.getElementById("changeColorList");

    this.currentPattern.primaryColor = colorList.options[colorList.selectedIndex].text;
  }

  update(){
    // this.updateSets()
    this.currentPattern.updatePattern();
  }

  changePattern(){
    //increments pattern

    middleBlockSet = [];
    innerRingSet = [];
    outerRingSet = [];


    if(this.patterns[this.currentPatternNumber + 1] != undefined){
      print("INCREMENTING")
      this.currentPattern = this.patterns[this.currentPatternNumber + 1];
      this.currentPatternNumber=1;
    } else {
      print("SETTING TO 0")
      this.currentPattern = this.patterns[0];
      this.currentPatternNumber =0;
    }

  }



}

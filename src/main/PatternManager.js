let middleBlockSet;
let innerRingSet;
let outerRingSet;

class PatternManager {

  constructor(patterns) {
    this.patterns = patterns;

    this.currentPattern = patterns[0];
    this.currentPatternNumber = 0;
    middleBlockSet = [];
    innerRingSet = [];
    outerRingSet = [];
    setSyncPattern("default!");
  }

  update() {
    this.currentPattern.updatePattern();
  }

  changePattern() {
    middleBlockSet = [];
    innerRingSet = [];
    outerRingSet = [];
    var patternList = document.getElementById("changePatternList");
    var nextPatternId = patternList.options[patternList.selectedIndex].text
    var curColor = this.currentPattern.color;

    var chosenPattern = parseInt(nextPatternId.charAt(0), 10) - 1;

    this.currentPatternNumber = chosenPattern;
    this.currentPattern = this.patterns[chosenPattern];

    this.currentPattern.color = curColor;
  }



}

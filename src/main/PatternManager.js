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

    switch (nextPatternId) {
      case "1 - basic":
        this.currentPatternNumber = 0;
        this.currentPattern = this.patterns[0];
        break;
      case "2 - quarters":
        this.currentPatternNumber = 1;
        this.currentPattern = this.patterns[1];
        break;
      case "3 - cross":
        this.currentPatternNumber = 2;
        this.currentPattern = this.patterns[2];
        break;
      case "4 - offset":
        this.currentPatternNumber = 3;
        this.currentPattern = this.patterns[3];
        break;
      case "5 - reverse offset":
        this.currentPatternNumber = 4;
        this.currentPattern = this.patterns[4];
        break;
      case "6 - thick cross":
        this.currentPatternNumber = 5;
        this.currentPattern = this.patterns[5];
        break;
      default:
        this.currentPatternNumber = 0;
        this.currentPattern = this.patterns[0];
    }

    this.currentPattern.color = curColor;
  }



}

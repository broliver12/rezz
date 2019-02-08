let middleBlockSet;
let innerRingSet;
let outerRingSet;

class PatternManager {

  constructor(patterns) {
    this.patterns = patterns

    this.currentPattern = patterns[0];
    this.currentPatternNumber = 0;
    middleBlockSet = [];
    innerRingSet = [];
    outerRingSet = [];
    setSyncPattern("default!")
  }

  setColor() {
    var colorList = document.getElementById("changeColorList");
    this.currentPattern.primaryColor = colorList.options[colorList.selectedIndex].text;
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
    var curColor = this.currentPattern.primaryColor;

    switch (nextPatternId) {
      case "1 - basic":
        this.currentPatternNumber = 0;
        this.currentPattern = this.patterns[0];
        break;
      case "2 - quarters":
        this.currentPatternNumber = 1;
        this.currentPattern = this.patterns[1];
        break;
      default:
        this.currentPatternNumber = 0;
        this.currentPattern = this.patterns[0];
    }

    this.currentPattern.primaryColor = curColor;
  }



}

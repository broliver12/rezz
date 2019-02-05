class Pattern {

  constructor(color, pattern, setCalculator) {
    this.primaryColor = color[0];
    this.pattern = pattern;
    this.setCalculator = setCalculator;
  }

  updatePattern(){
    this.setCalculator();
    this.pattern(this.primaryColor);
  }
}

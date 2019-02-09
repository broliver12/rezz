class Pattern {

  constructor(color, pattern, setCalculator) {
    this.color = color;
    this.pattern = pattern;
    this.setCalculator = setCalculator;
  }

  updatePattern(){
    this.setCalculator();
    this.pattern(this.color);
  }
}

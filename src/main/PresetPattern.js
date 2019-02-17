class PresetPattern {



  constructor(logic, endBlock) {
    this.endBlock = endBlock;
    this.logic = logic;
  }

  startAtTime(speed) {
    //convert time to block
    this.runBlock(block);
  }

  runBlock(block) {
    if(block < 0){
      return PresetPatternState.PRESTART;
    }
    if(block < this.endBlock){
      this.logic(block);
      return PresetPatternState.STARTED;
    } else if(block==this.endBlock){
      return PresetPatternState.STOPPED;
    }
  }

}

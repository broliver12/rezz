class Preset{

  constructor(name, url, presetPattern){
    this.name = name;
    this.url = url;
    this.presetPattern = presetPattern;
    this.state = PresetPatternState.PRESTART;
    this.startTime = 0;
    this.mostRecentPauseTime = 0;
  }

  pause(){
    if(this.state == PresetPatternState.STARTED){
      this.state == PresetPatternState.PAUSED
    } else {
      print("__ERROR: STATE ERROR: PRESET PAUSED WHEN NOT STARTED");
    }
  }

  stop(){
      this.state == PresetPatternState.STOPPED
  }

  start(){
    if(this.state == PresetPatternState.PAUSED || this.state == PresetPatternState.PRESTART){
      this.state == PresetPatternState.STARTED;
    } else {
      print("__ERROR: STATE ERROR: PRESET STARTED IN STOPPED STATE");
    }
  }

  run(){
    var nextState;
    if(this.state == PresetPatternState.STARTED){
      this.updateCurrentBlock();
      nextState = this.presetPattern.runBlock()
      this.state = nextState;
    } else if(this.state == PresetPatternState.PAUSED){
      
    } else {
      //STOPPPED OR PRESTARTED
    }

  }

  updateCurrentBlock(){

  }



}

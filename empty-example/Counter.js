class Counter {

  constructor(incrementTime, resetValue) {
    this.incrementTime = incrementTime;
    this.resetValue = resetValue;
    this.syncInterval = (resetValue + 1) / 4;
    this.divisions = [];
    this.reset = true;
    this.counter = 0;
    this.startTime = 0;
    this.curTime;
    this.children = [];
  }

  setDivisions(a, b, c, d) {
    this.divisions = [a, b, c, d];
  }

  sync() {
    for (let i = 0; i < this.children.length; i++) {

      this.children[i].startTime = this.curTime - this.children[i].incrementTime;

      if (this.counter == 0) {
        this.children[i].counter = this.children[i].divisions[0];
      } else if (this.counter == 1) {
        this.children[i].counter = this.children[i].divisions[1];
      } else if (this.counter == 2) {
        this.children[i].counter = this.children[i].divisions[2];
      } else if (this.counter == 3) {
        this.children[i].counter = this.children[i].divisions[3];
      }
    }
  }


  update(curTime) {
    if (!this.reset) {
      this.curTime = curTime;
      if (this.curTime > this.startTime + this.incrementTime) {
        this.counter++;
        if (this.counter % this.syncInterval == 0) {
          this.sync();
        }
        this.startTime = curTime;
        if (this.counter == this.resetValue + 1) {
          this.reset = true;
          this.counter = 0;
        }
      }

    } else {
      this.reset = false;
    }
  }

  addChild(childCounter) {
    //print('adding kids');
    this.children.push(childCounter);
  }

  getOppositeVal(curLED){
    const val = (this.resetValue + 1)/2;
    if(curLED < val){
      return curLED + val;
    } else {
      return curLED - val;
    }
  }


  getNextVal(offset) {
    if (this.counter + offset <= this.resetValue) {
      return this.counter + offset;
    } else if (this.counter + offset == this.resetValue + 1) {
      return 0;
    } else {
      return this.counter + offset - this.resetValue - 1;
    }
  }

  getPrevVal(offset) {
    if (this.counter - offset >= 0) {
      return this.counter - offset;
    } else {
      return this.resetValue + 1 + (this.counter - offset);
    }
  }


}

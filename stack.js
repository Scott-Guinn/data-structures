class Stack {
  constructor(){
    this.storage = [];
  }

  push(value){
    this.storage.push(value);
  }

  pop(){
    if (this.storage.length === 0) {
      return undefined;
    }
    return this.storage.push();
  }
}
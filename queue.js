class Queue {
  constructor(){
    this.start = 0
    this.end = 0;
    this.storage = [];
  }

  enqueue(val) {
    this.storage.push(val);
    // [ 2, 4, 5]
    this.end++;
  }

  dequeue() {
    var temp = this.storage[this.start];
    this.start++;
    return temp;
  }
}

var myQ = new Queue;
myQ.enqueue(3);
console.log('myQ: ', myQ);
// console.log(myQ.dequeue());
myQ.enqueue(4);
console.log(myQ.dequeue());
console.log(myQ.dequeue());


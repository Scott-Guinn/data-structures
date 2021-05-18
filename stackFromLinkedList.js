class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {

    let newNode = new Node(val);
    newNode.next = this.first;
    this.first = newNode;
    if (this.size === 0) this.last = newNode;
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}

let myStack = new Stack();
console.log(myStack.push('A'));
console.log(myStack.push('B'));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

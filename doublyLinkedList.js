class Node {
  constructor(val){
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;
    var temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.previous.next = null;
      this.length--;
      temp.previous = null;
      return temp;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    let temp = this.head;
    temp.next.previous = null;
    this.head = temp.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return temp;
  }

  /* my code, not as efficient as sol'n
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  } */

  get(index){
    if(index < 0 || index >= this.length) return null;
    var count, current;
    if(index <= this.length/2){
        count = 0;
        current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
    } else {
        count = this.length - 1;
        current = this.tail;
        while(count !== index){
            current = current.prev;
            count--;
        }
    }
    return current;
}

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return  !!this.shift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let newNext = this.get(index);
    let prev = newNext.previous;
    prev.next = newNode;
    newNode.previous = prev;
    newNode.next = newNext;
    newNext.previous = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.previous.next = foundNode.next;
      foundNode.next.previous = foundNode.previous;
      this.length--;
      foundNode.next = null;
      foundNode.previous = null;
      return foundNode;
    }
    return false;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log('length: ', this.length);
  }

}

myList = new DoublyLinkedList;
myList.push(1);
myList.push(2);
myList.push(3);
myList.set(2, 'X')
myList.print();
console.log('remove index 1: ', myList.remove(1));
myList.print();

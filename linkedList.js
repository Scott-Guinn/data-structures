class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let node = new Node(val);
    node.next = this._head;
    this._head = node;
    this.length++;

    if (this.length === 1) {
      this._tail = node;
    }
  }

  addToTail(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this.length++;
  }

  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this._head;
    this._head = this._head.next;
    this.length--;
    return temp;
  }

  removeFromTail() {
    if (this.length === 0) {
      return undefined;
    }

    let currentNode = this._head;

    while (currentNode.next !== this._tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    let temp = this._tail;
    this._tail = currentNode;
    this.length--;

    return temp;
  }

  contains(target) {
    let currentNode = this._head;
    while (currentNode !== null) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentNode = this._head;
    let currentIndex = 0;
    while(currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  set(index, val) {
   let currentNode = this.get(index);

   if (currentNode) {
     currentNode.value = val;
     return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.addToHead(val);
    } else if (index === this.length) {
      return !!this.addToTail(val);
    }

    let nodeBefore = this.get(index - 1);
    let nodeAfter = nodeBefore.next;

    let newNode = new Node(val);

    nodeBefore.next = newNode;
    newNode.next = nodeAfter;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.removeFromHead().value;
    if (index === this.length - 1) return this.removeFromTail().value;

    let nodeBefore = this.get(index-1);
    let temp = nodeBefore.next;
    let nodeAfter = nodeBefore.next.next;
    nodeBefore.next = nodeAfter;
    this.length--;

    return temp.value;
  }

  reverse() {
    let currentNode = this._head;
    let nextNode = currentNode.next;
    let counter = this.length;
    for (let i = 0; i < this.length - 1; i++) {
      let nodeAfter = nextNode.next;
      nextNode.next = currentNode;

      currentNode = nextNode;
      nextNode = nodeAfter;
    }

    let temp = this._tail;
    this._tail = this._head;
    this._head = temp;

    this._tail.next = null;

    return this;


    // this was my original solution, very slow time complexity because of all of the traversal required with this.get
    /* let currentIndex = this.length - 1;

    while (currentIndex > 0) {
      let previousNode = this.get(currentIndex - 1);
      previousNode.next.next = previousNode;
      currentIndex--;
    }

    let temp = this._tail;
    this._tail = this._head;
    this._head = temp;

    this._tail.next = null;

    return this;
   */
   // PSEUDOCODE FOR A NOT IN PLACE LINKED LIST REVERSAL
   // traverse the LinkedList throwing each node into an array
   // let currentIndex = 0;
   // iterate through that array from end to beginning assigning .next to the previous index of the array.
   // reassign the head, reassign the tail
   //return this;
  }
}

let myList = new LinkedList();
myList.addToTail('B');
myList.addToHead('A');
myList.addToTail('C');

// console.log('myList returns: ', myList);
// console.log('myList: ', myList.get(0), myList.get(1), myList.get(2));

console.log('myList after reverse: ', myList.reverse());
console.log('myList: ', myList.get(0), myList.get(1), myList.get(2));

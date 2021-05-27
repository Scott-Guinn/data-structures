class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  search(node, target) {
    if (target === node.value) return node;
    if (target < node.value && node.left) return this.search(node.left, target);
    if (target > node.value && node.right) return this.search(node.right, target);
    return false;
  }

  insertIterative(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (current) {
        if (val < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      current = newNode;;
      return this;
    }
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {

      function innerFunc(searchNode) {
        if (val < searchNode.value) {
          if (!searchNode.left) {
            searchNode.left = newNode;
          } else {
            innerFunc(searchNode.left);
          }
        } else {
          if (!searchNode.right) {
            searchNode.right = newNode;
          } else {
            innerFunc(searchNode.right);
          }
        }
      }
      innerFunc(this.root);
    }
  }

  inOrderTraverse(node = this.root, result = []) {
    //base case, value is null
    if (!node.value) return;
    //recursive case, value is not null
    result.push(node.value);
    if (node.left) this.inOrderTraverse(node.left, result)
    if (node.right) this.inOrderTraverse(node.right, result)
    return result;
  }
}


let tree = new BinarySearchTree;
tree.insert(10);
tree.insert(7);
tree.insert(14);
tree.insert(4);
// tree.root = new Node(10);
// tree.root.left = new Node(7);
// tree.root.right = new Node(14);
// tree.root.left.left = new Node(4);

//console.log('tree: ', tree);
//console.log('search: ', tree.search(tree.root, 2));
console.log('tree: ', tree.inOrderTraverse())
// console.log('search: ', tree.search(tree.root, 23));
// console.log('inOrderTraverse: ', tree.inOrderTraverse());

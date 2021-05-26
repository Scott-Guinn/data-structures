class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Tree(10)

// Level 1
root.left = new Tree(8)
root.right = new Tree(12)

// Level 2
root.left.left = new Tree(5)
root.left.right = new Tree(9)
root.right.left = new Tree(11)
root.right.right = new Tree(14)

function inOrder(root, result = []){
	// Should return [5,8,9,10,11,12,14]
  if (root.left) inOrder(root.left, result);
  result.push(root.value)
  if (root.right) inOrder(root.right, result);
  return result;
}

function preOrder(root, result = []) {
  // Should return [10,8,5,9,12,11,14]
  result.push(root.value);
  if (root.left) preOrder(root.left, result);
  if (root.right) preOrder(root.right, result);
  return result;
}

function preOrder(root) {
  // Should return [10,8,5,9,12,11,14]
  let array = [];
  array.push(root.value);
  if (root.right) array.push(preOrder(root.left));
  if (root.right) array.push(preOrder(root.right));
  return array.flat();
}

function postOrder(root, result = []) {
  // Should return [5,9,8,11,14,12, 10]
  if (root.left) postOrder(root.left, result);
  if (root.left) postOrder(root.right, result);
  result.push(root.value);
  return result;
}

console.log('Should return [5,8,9,10,11,12,14]');
console.log(inOrder(root));
console.log('Should return [10,8,5,9,12,11,14]');
console.log(preOrder(root));
console.log('Should return [5,9,8,11,14,12,10]');
console.log(postOrder(root));


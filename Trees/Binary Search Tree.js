class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;

        let current = this.root,
            found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    validate(node, min = -Infinity, max = Infinity) {

        if (!node) return true;

        if (node.value <= min || node.value >= max) return false;

        let left = this.validate(node.left, min, node.value);
        let right = this.validate(node.right, node.value, max)

        return left && right;
    }

    // Using Recursion
    height(root) {
        if (root === null) return 0;
        let left = this.height(root.left);
        let right = this.height(root.right);
        return 1 + Math.max(left, right);
    }
}

//       10
//   5        13
// 2   7   11    16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);


// validate(node, min = null, max = null) {

//     if (max !== null && node.value > max) return false;

//     if (min !== null && node.value < min) return false;

//     if (node.left && !this.validate(node.left, min, node.value)) return false;

//     if (node.right && this.validate(node.right, node.value, max)) return false;

//     return true;
// }
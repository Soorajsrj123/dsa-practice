class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binaryTree {

    constructor() {
        this.root = null;
    }

    isEmpty() {
        if (this.root === null) return true
    }

    addNode(data) {
        let newNode = new node(data)

        if (this.root == null) {
            this.root = newNode
            return
        } else {

            let focusNode = this.root;
            let parent;

            while (true) {
                parent = focusNode;

                if (data < focusNode.data) {

                    focusNode = focusNode.left;
                    if (focusNode == null) {
                        parent.left = newNode;
                        return;
                    }

                } else {

                    focusNode = focusNode.right;
                    if (focusNode == null) {
                        parent.right = newNode;
                        return;
                    }

                }
            }

        }
    }

    find(value) {

        if (!this.root) return false;

        let current = this.root,
            found = false;

        while (current && !found) {
            if (value < current.data)
                current = current.left;
            else if (value > current.data)
                current = current.right;
            else
                return current
        }

        if (!found) return 'Not Found';

    }

    contains(value) {
        if (!this.root) return false;

        let current = this.root;
        let found = false

        while (current && !found) {
            if (value < current.data)
                current = current.left
            else if (value > current.data)
                current = current.right
            else
                return true;
        }

        if (!found) return false

    }

    // inOrderTraversal(focusNode,) {
    //     if (focusNode !== null) {
    //         this.inOrderTraversal(focusNode.right)
    //         this.inOrderTraversal(focusNode.left)
    //         console.log(focusNode.data)
    //     }
    // }


    // Depth First Traversal

    inOrderTraversal(node, values) {
        if (!node) return;
        this.inOrderTraversal(node.left, values);
        values.push(node.data);
        this.inOrderTraversal(node.right, values);
        return values;
    }


    preOrderTraversal(node, values) {
        if (!node) return;
        values.push(node.data)
        this.preOrderTraversal(node.right, values)
        this.preOrderTraversal(node.left, values)
        return values
    }

    postOrderTraversal(node, values) {
        if (!node) return;
        this.postOrderTraversal(node.left, values)
        this.postOrderTraversal(node.right, values)
        values.push(node.data)
        return values
    }


    //Breadth First Traversal

    levelOrder() {
        const queue = []
        queue.push(this.root)
        let arr = []

        while (queue.length) {
            let curr = queue.shift()
            arr.push(curr.data)

            if (curr.left)
                queue.push(curr.left)


            if (curr.right)
                queue.push(curr.right)

        }
        return arr
    }

    min(root) {
        if (!root.left) return root.data
        else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) return root.data
        else {
            return this.max(root.right)
        }
    }

    delete(value) {
        if (value)
            this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {

        if (root === null) return root

        if (value < root.data) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }

            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.data = this.min(root.right)
            root.right = this.delete(root.right, root.data)
        }
        return root
    }

    isBst() {
        return this.check(this.root)
    }

    check(node) {
        if (!node) return true

        if (node.left && node.left.data > node.data) return false

        if (node.right && node.right.data < node.data) return false

        if (!this.check(node.right) || !this.check(node.left)) return false;

        return true
    }
    
    closest(value) {
        let current = this.root
        let close = current.data
        while (current) {
            if (current.data == value) {
                console.log('value exists');
                return current.data;
            }
            if (Math.abs(current.data - value) < Math.abs(close - value)) {
                close = current.data
            }
            if (value < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return close
    }

}


let tree = new binaryTree();
// console.log('Tree empty', tree.isEmpty())
tree.addNode(10);
tree.addNode(20);
tree.addNode(30);
tree.addNode(40);
tree.addNode(50);

// console.log('Min Value :', tree.min(tree.root))
// console.log('Max Value :', tree.max(tree.root))

// console.log(tree.find(20));
// console.log(tree)


// console.log("In-Order Traversal: ", tree.inOrderTraversal(tree.root, []));
// console.log('Pre-Order-Traversal: ', tree.preOrderTraversal(tree.root, []));
// console.log('Post-Order-Traversal: ', tree.postOrderTraversal(tree.root, []));


console.log("Level Order :", tree.levelOrder())

tree.delete(10)

console.log("Level Order :", tree.levelOrder())






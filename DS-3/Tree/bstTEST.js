class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        let newNode = new node(data)
        if (this.root === null) this.root = newNode

        if (this.root) {
            let focusNode = this.root;
            let parent;

            while (true) {
                parent = focusNode;
                if (data < focusNode.data) {
                    focusNode = focusNode.left
                    if (!focusNode) {
                        parent.left = newNode;
                        return
                    }
                } else {
                    focusNode = focusNode.right
                    if (!focusNode) {
                        parent.right = newNode;
                        return
                    }
                }
            }
        }

    }

}


let tree = new binaryTree();

tree.insert(10)
tree.insert(20)

console.log(tree)

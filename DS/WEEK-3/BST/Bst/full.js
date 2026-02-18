class node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    isEmpty() {
      return this.root === null;
    }
  
    insert(val) {
      let newnode = new node(val);
      if (this.isEmpty()) {
        this.root = newnode;
      } else {
        this.insertNode(this.root, newnode);
      }
    }
    insertNode(root, newnode) {
      if (newnode.data < root.data) {
        if (root.left == null) {
          root.left = newnode;
        } else {
          this.insertNode(root.left, newnode);
        }
      } else {    
        if (root.right === null) {
          root.right = newnode;
        } else {
          this.insertNode(root.right, newnode);
        }
      }
    }
    search(root, value) {
      if (!root) {
        return false;
      } else {
        if (root.data === value) {
          return true;
        } else if (value < root.data) {
          this.search(root.left, value);
        } else {
          this.search(root.right, value);
        }
      }
    }
    preOrder(root) {
      if (root) {
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }
  
    inOrder(root) {
      if (root) {
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
      }
    }
    postOrder(root) {
      if (root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
      }
    }
  
    BFS() {
      let queue = [];
      // queue implment arry is not efficiant
      queue.push(this.root);
      while (queue.length) {
        let current = queue.shift();
        console.log(current.data);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
    }
    min(root) {
      if (!root.left) {
        return root.data;
      } else {
        return this.min(root.left);
      }
    }
  
    max(root) {
      if (!root.right) {
        return root.data;
      } else {
        return this.max(root.right);
      }
    }
    deletion(val) {
      this.root = this.deleteNode(this.root, val);
    }
  
    deleteNode(root, value) {
      if (root === null) {
        return root;
      }
      if (value < root.data) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.data) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        }
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.data = this.min(root.right);
        root.right = this.deleteNode(root.right, root.data);
      }
      return root;
    }
  }
  
  const BST = new BinarySearchTree();
  BST.insert(10);
  BST.insert(5);
  BST.insert(15);
  BST.insert(14);

//   BST.insert(13);
//   BST.insert(17);
//   BST.insert(20);
//   BST.insert(3);
//   BST.insert(7);
//   BST.insert(17);
//   BST.insert(12);
  console.log(BST.search(BST.root, 10));
  
  console.log(BST);
  console.log("--------------------");
  console.log(BST);
  BST.BFS();
  console.log(BST.max(BST.root));
  BST.deletion(10);
  
  console.log("-------");
  
  BST.BFS();
  
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let cur = this.head;
    let listResult = "";
    while (cur) {
      listResult = listResult + " " + cur.value;
      cur = cur.next;
    }
    console.log(listResult);
  }
  prepend(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index >= this.size) {
      console.log("invalid indexx");
      return;
    }
    let newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }

  remove(value) {
    if (this.isEmpty()) {
      console.log("list is empty");
      return false;
    }
    console.log(this.head.value);
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        prev.next = prev.next.next;
        this.size--;
        return;
      }
      console.log("value not found");
      return;
    }
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("invalid index");
      return false;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return true;
    } else {
      let prev = this.head;
      let i = 0;
      while (i < index - 1) {
        prev = prev.next;
        i++;
      }
      prev.next = prev.next.next;
      this.size--;
      return true;
    }
  }

  reverseList() {
    if (this.isEmpty()) {
      return null;
    }

    let prev = null;
    let cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    
      let cur = this.head;
      let i = 0;
      while (cur) {
        if (cur.value === value) {
          return i;
        }
        cur = cur.next;
        i++;
      }
      return -1;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let list = new LinkedList();
console.log(list);
list.prepend(100);
list.prepend(10);
list.insert(50, 1);
console.log(list);
list.print();
list.reverseList();
console.log(list);
console.log(list.search(100))
list.print();

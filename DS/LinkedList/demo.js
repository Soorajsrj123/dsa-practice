class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const Newnode = new Node(value);

    if (this.head == null) {
      this.head = Newnode;
      this.tail = this.head;
      this.size++;
      return;
    }
    this.tail.next = Newnode;
    this.tail = Newnode;
    this.size++;
    return;
  }
  print() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  prepand(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return;
  }
  insertAtindex(index, value) {
    const newNode = new Node(value);
    if (index > 0 && index > this.size) {
      return;
    }

    if (index == 0) {
      let current = this.head;
      let newNode = new Node(value);
      this.head = newNode;
      this.head.next = current;
      return;
    }
    let count = 0;
    let current = this.head;
    let pre;
    while (count < index) {
      pre = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    pre.next = newNode;
    this.size++;
  }
}

const list = new LinkedList();

list.prepand(8);
list.append(6);
list.append(7);
list.append(8);
list.append(9);

list.print();
console.log("=========");
list.insertAtindex(0, 99);
list.print();

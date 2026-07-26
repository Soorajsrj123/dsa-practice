class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  print() {
    let curr = this.head;
    let values = "";

    while (curr) {
      values += curr.value + " <-> ";
      curr = curr.next;
    }

    console.log(values + "null");
  }
  printReverse() {
    let cur = this.tail;
    let values = "";
    while (cur) {
      values += cur.value + " <-> ";
      cur = cur.prev;
      }
      console.log(values + "null")
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return -1;
    }
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }
  removeFromLast() {
    if (this.isEmpty()) {
      return -1;
    }
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

let list = new DoublyLinkedList();

console.log(list);
list.prepend(100);
// console.log(list);
list.append(1);
list.prepend(200);
list.print();
// list.removeFromFront();
list.print();
list.printReverse()

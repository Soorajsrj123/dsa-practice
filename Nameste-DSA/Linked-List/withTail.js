class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail=node
        } else {
            node.next = this.head
            this.head=node
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail=node
        } else {
            this.tail.next = node
            this.tail=node
        }
        this.size++

    }
    removeFromFront() {
        if (this.isEmpty()) {
            return -1
        }
        let removedValue = this.head.value
        
        if (this.size == 1) {
            this.head = null
            this.tail=null
        } else {
           this.head=this.head.next
        }
        this.size--
        return removedValue
        
    }
    removeFromEnd() {
        if (this.isEmpty()) {
         return -1
        }
        let removedValue
        if (this.size === 1) {
            removedValue=this.head.value
            this.head = null
            this.tail = null
        } else {
            let pre = this.head
            while (pre.next!==this.tail) {
                pre=pre.next
            }
             removedValue=this.tail.value
            pre.next=null
            this.tail = pre
        }
        this.size--
        return removedValue
}

}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let list = new LinkedList();

list.prepend(100)
list.prepend(200)
console.log(list)
list.print()
list.removeFromEnd()
console.log(list)
list.print()

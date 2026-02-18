class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  InsertFirst(value) {
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
  }
  InsertLast(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
      this.size++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  removefirst() {
    if (!this.head) return;

    this.head = this.head.next;
    this.size--;
  }
  removelast() {
    let current = this.head;
    let prev;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
  }

  // removeVal(val) {
  //   let current = this.head;
  //   let prev;

  //   if ( current.data == val) {
  //     this.head = current.next;

  //     this.size--;
  //     return;
  //   }

  //   while (current.data != val) {
  //     prev=current
  //     current=current.next
  //   }
  //   prev.next=current.next

  //   this.size--;
  // }

  RemoveWithVal(value) {
    let temp = this.head;

    let prev = null;
    // checking if the deleting value is in head
    if (temp != null && temp.data == value) {
      this.head = temp.next;
      this.size--;
      return;
    }
    // finding the node containing value
    while (temp != null && temp.data != value) {
      prev = temp;
      temp = temp.next;
    }

    //  if Given value is not present on the list
    if (temp == null) {
      return "sorry no value found";
    }
    //  if the deleting value is in tail
    if (temp == this.tail) {
      this.tail = prev;
      this.tail.next = null;
      return;
    }
    //  Re arranging the node after delete
    prev.next = temp.next;
  }

  insertAfter(value, refvalue) {
    let newNode = new Node(value);
    let current = this.head;

    while (current != null && current.data != refvalue) {
      current = current.next;
    }

    if (current == null) {
      return;
    }

    if (current == this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }
  insertbefore(value,nextto)
  {
      let newNode=new Node(value)
      let current=this.head
      if(current==null)
      {
          return
      }
      if(current.data==nextto)
      {
          newNode.next=this.head
          this.head=newNode
          this.size++
          return
      }
      let prev
      while(current!=null&&current.data!=nextto)
      {
          prev=current
          current=current.next

      }
      newNode.next=current
      prev.next=newNode
      this.size++
      return
  }

  insertAf(value, refval) {
    const newNode = new Node(value);
    let current = this.head;
    let pre = null;
    while (current != null && current.data != refval) {
      current = current.next;
    }
    if (current == null) {
      return;
    }
    if (current == this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = current.next;
    current.next = newNode;
   
  }

  insertAtIndex(data, index) {
    //if index is not valid
    if (index > 0 && index > this.size) return;

    //if index ==0

    if (index === 0) {
      let current = this.head;
      let newNode = new Node(data);
      this.head = newNode;
      this.head.next = current;
      return;
    }

    //insert at index

    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      count++;
      prev = current;
      current = current.next;
    }
    let newNode = new Node(data);

    newNode.next = current;
    prev.next = newNode;
  }

  arrtolist(arr){

    this.head   =  new Node(arr[0],this.head)
    let current = this.head
    
    for(let i=1;i<arr.length;i++){
      let newNode = new Node(arr[i])
      current.next = newNode
      current = current.next
    }
  
  
  }

}

let list = new LinkedList();

// list.InsertFirst(8);
// list.InsertFirst(5);


let arr =  [10, 5, 8]
list.arrtolist(arr)
list.InsertFirst(1000);
// list.removeVal(5);

// list.print();
// list.RemoveWithVal(77)
// console.log(list.RemoveWithVal(77)
// );

list.insertAtIndex(99, 3);
// console.log(list,"-------------");
list.print();

// console.log(list);

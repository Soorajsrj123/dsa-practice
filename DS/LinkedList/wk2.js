class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepand(value) {
    const newnode = new Node(value);
    if (this.head == null) {
      this.head = newnode;
      this.tail=this.head

      this.size++;
      return;
    }
    newnode.next = this.head;
    this.head = newnode;
    this.size++;
    return;
  }

  print() {
    if (this.head == null) {
      return;
    }

    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  append(value)
  {
    const newnode=new Node(value)
    if(this.head==null)
    {
        this.head=newnode
        this.tail=this.head
        this.size++
     return
    }
    this.tail.next=newnode
    this.tail=newnode
    this.size++
    
  }

removeWithValue(value)
{
  
    let current=this.head
    let prev=null

    if(current!=null&&current.data==value)
    {
       this.head=current.next
        this.size--
        return this
    }
    while(current!=null&&current.data!=value)
    {
        prev=current
        current=current.next
    }
    if(current==null)
    {
      return
    }
    if(current==this.tail)
    {
      this.tail=prev
      this.tail.next=null
      this.size++
      return this
    }
    prev.next=current.next
    return
}

removeFirst()
{
  let current=this.head
  if(this.head==null)
  {
    return
  }
  this.head=current.next
  this.size--
}

removeLast()
{
  
  if(this.head==null)
  {
    return
  }
  let current=this.head
  let prev;
  while(current.next)
  {
    prev=current
    current=current.next
  }
  prev.next=null
  this.tail=prev

}

removeUsingIndex(index)
{
 
  let current=this.head
  let prev;
  if(this.head==null)
  {
    return
  }
  let count=0

  while(current.next!=null&&count!=index)
  {
    prev=current
    current=current.next
    count++
  }
 
  prev.next=current.next

}

insertAfterValue(value,nextto)
{
  let current= this.head
  let prev;
  const newnode=new Node(value)

  if(this.head==null)
  {
    return
  }

  while(current.next!=null&&current.data!=nextto)
  {
    prev=current
    current=current.next

  }

  if(current==null)
  {
    return
  }
  if(current==this.tail)
  {
    this.tail.next=newnode
    this.tail=newnode
    this.size++
    return this
  }
 newnode.next=current.next
  current.next=newnode

}

insertBeforeValue(value,refval)
{
  let current=this.head
  let prev;
  const newnode=new Node(value)

  if(this.head==null)
  {
    return
  }
  while(current!=null&&current.data!=refval)
  {
    prev=current.next
    current=current.next.next
  }

}

insertAtIndex(index,data)
{
  const newnode=new Node(data)
let prev;
  let current=this.head

  if(index>0&&index>this.size)
  {
    return 
  }
  if(index==0)
  {
 
    this.head=newnode
    this.head.next=current
    this.size++
    return
  }
  let count=0
  while(current!=null&&count!=index)
  {
    prev=current
    current=current.next
    count++
  }
  if(current==null)
  {
    return
  }
  newnode.next=current
  prev.next=newnode

}

arrayToLinkedList(arr)
{
  this.head=new Node(arr[0])
  this.size++
  let current=this.head

  for(let i=1;i<arr.length;i++){
     current.next=new Node(arr[i])
     current=current.next
     this.size++
  }

}
reverseList()
{
  let current=this.head
  let prev=null
  let next;
  while(current)
  {
    next=current.next
    current.next=prev
    prev=current
    current=next
  }
  this.head=prev
}

 printMiddle(){
  var slow_ptr = this.head;
  var fast_ptr = this.head;
  if (this.head != null){
     while (fast_ptr != null && fast_ptr.next != null){
        fast_ptr = fast_ptr.next.next;
        slow_ptr = slow_ptr.next;
     }

    }
    return slow_ptr.data
  }


finddupi()
{
  let current=this.head
  let values=new Set()
  let dupi=[]

  while(current)
  {
    if(values.has(current.data))
    {
      dupi.push(current.data)
    }
    else{
      values.add(current.data)
    }
    current=current.next
  }
  return dupi
}




  
// linkedarray()
// {
//   let current= this.head
//  let arr=[]

//   while(current!=null)
//   {
//     arr.push(current.data)
//     current=current.next
//   }
//   return arr
// }

// reverseList()
// {
//   let current=this.head
//   let prev=null
//   let next;
//   while(current)
//   {
//     next=current.next
//     current.next=prev
//     prev=current
//     current=next
//   }
//   this.head=prev
// }

}
//   //      //      //     //       REMOVEVALUE       //     //       //      



const list = new Linkedlist()

list.prepand(1)
list.prepand(2)
list.prepand(3)

list.prepand(4)
console.log("||");
console.log(list.printMiddle());
console.log(
  "||||"
);
list.print()

// list.removeWithValue(4)
// console.log('-------',list.removeWithValue(6));
console.log("--");
// list.insertAtIndex(3,100)
// list.removeUsingIndex(9)
// console.log(list.arrayToLinkedList(arr));
// list.reverseList()
console.log("dupi",list.finddupi()
);
list.print()
// console.log(list.linkedarray()
// );



// arrayto(arr)
// {
//   this.head=new Node(a[0])
//   let current=this.head
//   this.size++
//   for(let i=1;i<arr.length;i++)
//   {
//     current.next=new Node(arr[i])
//     current=current.next
//   }
// }

// linkedarray()
// {
//   let current= this.head
//  let arr=[]

//   while(current!=null)
//   {
//     arr.push(current.data)
//     current=current.next
//   }
//   return arr
// }



// arraytolinke(arr)
// {
//  this.head=new Node(arr[0])

//  let current=this.head
//  for(let i=1;i<arr.length;i++)
//  {
//   current.next=new Node(arr[i])
//   current=current.next
//  }
// }


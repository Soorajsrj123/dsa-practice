
class Node
{
 constructor(value)
 {
    this.data=value
    this.next=null
    this.prev=null
 }
}

class DoblyLinkedList
{

    constructor()
    {
        this.head=null
        this.tail=null
        this.size=0
    }

  append(value)
  {
    const newNode=new Node(value)
    if(this.head==null)
    {
        this.head=newNode
        this.tail=this.head
        this.size++
        return
    }

    newNode.prev=this.tail
    this.tail.next=newNode

    this.tail=newNode
    this.size++
  }

}

const newList=new DoblyLinkedList()
newList.append(3)
newList.append(99)
console.log(newList);



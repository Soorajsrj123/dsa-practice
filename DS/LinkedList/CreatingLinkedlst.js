
class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}


class LinkedList{
    constructor(value)
    {
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head,
        this.size=1
    }
    append(value)
    {
      const Newnode=new Node(value)
        this.tail.next=Newnode
        this.tail=Newnode
        this.size++
        return this
    }
    prepand(value)
    {
        
        const Newnode=new Node(value)
        Newnode.next=this.head
        this.head=Newnode
        this.size++
        return this
        // current=this.head

        // this.head=Newnode
        // this.head.next=current
    }

     printList()
    {
        let array=[]; 
       let currentNode=this.head
        while(currentNode!== null)
        {
            array.push(currentNode.value)
            currentNode=currentNode.next
        }
        return array
    }

    insert(index,value)
    {
        
        if(index>=this.size){
           return this.append(value)
        }
        
        console.log("kkkkkkkkk");
        const Newnode= new Node(value)
        let leader=this.traversIndex(index-1)
        let rev=leader.next
        leader.next=Newnode
        Newnode.next=rev
        this.size++
        return this.printList()

    }

    traversIndex(pos)
    {
        let count=0;
       let currentNode=this.head
        while(count!=pos)
        {
            currentNode=currentNode.next
            count++
        }
        return currentNode
    }

    remove(index){

     

        let leader=this.traversIndex(index-1)
        let delnode=leader.next
        leader.next=delnode.next
        this.size--
        return this.printList()




    }
}


const Mylist=new LinkedList(10)

// console.log(Mylist);
console.log(Mylist.append(5));
console.log(Mylist.append(16));
// console.log(Mylist.append(8));
// console.log(Mylist.append(10));
console.log(Mylist.prepand(1),'kk');
console.log("s",Mylist.printList());
Mylist.insert(3,99)
console.log(Mylist.printList());

Mylist.remove(3)
console.log(Mylist.printList());
Mylist.remove(2)
console.log(Mylist.printList());

class Node{
    constructor(value)
    {
        this.data=value
        this.next=null
    }
}

class Linkedlist{
    constructor()
    {
        this.head=null
        this.tail=null
    }

    append(value)
    {
        const newnode=new Node(value)
        if(this.head==null)
        {
            this.head=newnode
            this.tail=this.head
            return
        }
        this.tail.next=newnode
        this.tail=newnode
    }
    print()
    {
        let current=this.head
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
}

const list=new Linkedlist()

list.append(5)
list.append(4)
list.append(1)
list.append(3)

list.print()
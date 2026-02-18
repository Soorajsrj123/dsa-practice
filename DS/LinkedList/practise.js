class Node{
    constructor(value){
        this.data=value
        this.next=null
        this.size=0
    }
}


class LinkedList
{
    constructor()
    {
        this.head=null
        this.tail=null
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

        this.tail.next=newNode
        this.tail=newNode
        this.size++
    }

    prepend(value)
    {
        const newNode=new Node(value)
    
        if(this.head==null)
        {
            this.head=newNode
            this.tail=newNode
            this.size++
            return
        }
        newNode.next=this.head
        this.head=newNode
        this.size++

    }

    print()
    {
       let current=this.head

       while(current)
       {
        console.log(current.data);
        current=current.next
       }

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
    insertAfter(value,nextto)
    {
        let newNode=new Node(value)
        let current=this.temp
       if(this.head==null)
       {
            return
       }
       while(current!=null&&current.data!=nextto)
       {
        
       }
    }
}

const ls=new LinkedList()
ls.append(10)
ls.append(2)
ls.prepend(0)

ls.append(3)

ls.print()
console.log("-------");
ls.insertbefore(56,2)
ls.print()
console.log(ls);
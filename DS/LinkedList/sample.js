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
        this.size=0
    }
  
    append(value)
    {

        const Newnode=new Node(value)


        if(this.head==null)
        {
            this.head=Newnode
            this.tail=this.head
            this.size++
            return
        }
        this.tail.next=Newnode
        this.tail=Newnode
        this.size++

        
    }
    print()
    {
       let current= this.head
       while(current)
       {
        console.log(current.data)
        current=current.next
       }

    }

    prepand(value)
    {
        const Newnode=new Node(value)

        if(this.head==null)
        {
            this.head=Newnode
            this.tail=this.head
            this.size++
            return
        }
       

        Newnode.next=this.head
        this.head=Newnode
        this.size++
      
    }

}

const ll=new Linkedlist()


ll.append(5)
ll.append(1)
ll.append(2)


ll.prepand(3)

ll.print()


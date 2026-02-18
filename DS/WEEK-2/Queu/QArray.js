
// class Node{
//     constructor(value)
//     {
//         this.data=value
//         this.next=null
//     }
// }
// class Qu{
//     constructor()
//     {
//         this.front=null
//         this.rear=null
//     }

//     enque(value)
//     {
//         const newNode=new Node(value)
//         if(this.rear==null)
//         {
//             this.front=this.rear=newNode
//             return
//         }
//         this.rear.next=newNode
//         this.rear=newNode

//     }
//     deque()
//     {
//         if(this.front==null)
//         {
//             console.log("no data");
//             return
//         }
//         this.front=this.front.next
//         if(this.front=null)
//         {
//             this.rear=null
//         }

//     }
// }




class Node{
    constructor(value)
    {
        this.data=value
        this.next=null
    }
}

class Queue{
    constructor()
    {
        this.front=null
        this.rear=null
    }

    enqueu(value)
    {
        const newNode=new Node(value)
        if(this.rear==null)
        {
            this.front=this.rear=newNode
            return
        }
        this.rear.next=newNode
        this.rear=newNode
    }
    deque()
    {
        if(this.front==null)
        {
            return
        }
        this.front=this.front.next
        if(this.front==null)
        {
            this.rear=null
        }
    }
    display()
    {
        if(this.front==null)
        {
            return
        }
        let current=this.first
        while(current)
        {
            console.log(current.data);
            current=current.next
        }
    }

}

const ss=new Queue()

ss.enqueu(3)
ss.enqueu(5)
ss.enqueu(6)
ss.deque()
ss.display()

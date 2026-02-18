

// class Node{
//     constructor(data,next=null)
//     {
//         this.data=data
//         this.next=next
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }


//     insertFisrt(value)
//     {

//         this.head=new Node(value,this.head)
//         this.size++

//     }

//     insertLast(value){
//         const node= new Node(value)


//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=node 
//         this.size++
//     }

//     printData(){
//         let current=this.head

//         while(current!=null)
//         {
//             console.log(current.data);
//             current=current.next
//         }
//     }
    
// }

// let fir=new LinkedList()
// fir.insertFisrt(88)
// fir.insertFisrt(55)
// fir.insertFisrt(19)
// fir.printData()
// console.log("/////////");
// fir.insertLast(999)
// fir.printData()

// // console.log(fir.printData());
// // console.log(fir);



class Node{

    constructor(value)
    {
        this.data=value
        this.next=null
      
    }
}

class LinkedList
{

       constructor()
       {
        this.head=null

        this.tail=null
        this.size=0
       } 

       append(value)
       {

        const  newNode=new Node(value)

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

       print()
       {
        if(this.head==null)
        {
            return "sorry"
        }
        let current=this.head

        while(current!=null)
        {
            console.log(current.data);
            current=current.next
        }
       }

       prepand(value)
       {
        const newNode=new Node(value)
        if(this.head==null)
        {
         this.head=newNode
         this.tail=this.head
         this.size++
         return
        }
        newNode.next=this.head
        this.head=newNode
        this.size++

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
        this.size--
       }
       removeFirst()
       {
        if(this.head==null)
        {
            return
        }
        this.head=this.head.next
        this.size--
       }

       removeWithValue(value)
       {
        let temp=this.head
        let prev;
        if(temp!=null&&temp.data==value)
        {
           this.head=temp.next
           this.size--
           return
        }
        while(temp!=null&&temp.data!=value)
        {
            prev=temp
            temp=temp.next

        }
        if(temp==null)
        {
            return
        }
          if(temp==this.tail)
          {
            this.tail=prev
            this.tail.next=null
            return
          }
          prev.next=temp.next

       }

       insertAfter(value,nextTo)
       {
        const newNode=new Node(value)
        
        let temp=this.head
        while(temp!=null&&temp.data!=nextTo)
        {
            temp=temp.next

        }
        if(temp==null)
        {
            return
        }
        if(temp==this.tail)
        {
            const newNode=new Node(value)
            this.tail.next=newNode
            this.tail=newNode
            this.size++
            return
        }
        newNode.next=temp.next
        temp.next=newNode
       }

}

const ll=new LinkedList()
ll.append(13)
ll.append(76)
ll.prepand(99)
ll.print()
console.log("-----");
ll.removeWithValue(99)
ll.print()
console.log("-----");

ll.insertAfter(100,13)
ll.print()

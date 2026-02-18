
class Node{
    constructor(value)
    {
        this.data=value
        this.next=null
    }
}

class Linkedlist
{
    constructor()
    {
        this.head=null
        this.tail=null
        this.size=0
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

    print()
    {
        let current=this.head
        while(current)
        {
            console.log(current.data);
            current=current.next
        }
    }

    prepand(value)
    {
        const newnode=new Node(value)
        if(this.head==null)
        {
            this.head=newnode
            this.tail=this.head
            this.size++
            return
        }
        newnode.next=this.head
        this.head=newnode
        this.size++
    }

    insertAtindex(index,value)
    {
        const newnode=new Node(value)
        let current=this.head

        if(index>0&&index>this.size)
        {
            return
        }
        if(index==0)
        {
            newnode.next=this.head
            this.head=newnode
            this.size++
            return
        }
        let prev;
        let count=0
        while(count<index)
        {
            prev=current
            current=current.next
            count++
        }
        newnode.next=current
        prev.next=newnode
        this.size++

    }

    insetAfterValue(value,nextto)
    {
        const newnode=new Node(value)
        let current=this.head
        
        while(current!=null&&current.data!=nextto)
        {
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
            return
        }
        newnode.next=current.next
        current.next=newnode
        this.size++
    }

    insertBeforeValue(value,nextto)
    {
        const newnode=new Node(value)
        let current=this.head
        let prev;
        if(current==null)
        {
            return
        }
        if(current.data==nextto)
        {
            newnode.next=this.head
            this.head=newnode
            this.size++
            return

        }
        while(current!=null&&current.data!=nextto){
            prev=current
            current=current.next

        }
        if(current==null)
        {
            return
        }
        newnode.next=current
        prev.next=newnode
        this.size++
    }
 removefirst()
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
    let current=this.head
    let prev
    if(this.head==null)
    {
        return
    }
    while(current.next)
    {
        prev=current
        current=current.next
    }
    prev.next=null

    this.tail=prev

    this.size--

 }

 removeWithIndex(index)
 {
    let current=this.head
    let prev;
    if(index>0&&index>this.size)
    {
        return
    }
    if(index==0)
    {
        this.head=current.next
        
        return
    }

    let count=0
    while(count<index)
    {
        prev=current
        current=current.next
        count++
    }
    if(current==this.tail)
    {
        prev.next=null
        this.tail=prev
        this.size--
        return
    }
    prev.next=current.next


 }

 arrayTolist(arr)
 {
    this.head=new Node(arr[0])
    let current=this.head
    for(let i=1;i<arr.length;i++)
    {
        current.next=new Node(arr[i])
        current=current.next
    }
    
 }

 listToArray()
 {
    let arr=[]
    let current=this.head
    while(current)
    {
        arr.push(current.data)
        current=current.next
    }
    return arr
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




}

let ll=new Linkedlist()
ll.append(3)
ll.prepand(3)
ll.append(5)
ll.append(7)
ll.prepand(5)
// ll.print()

console.log("==");
// let arr=[3,2,6,4]
// ll.arrayTolist(arr)
ll.print()
console.log(ll.finddupi());

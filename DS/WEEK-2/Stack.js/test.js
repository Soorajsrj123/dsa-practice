
// class Stack{
//     constructor()
//     {
//         this.item=[]
//     }

//     push(value)
//     {
//       return  this.item.push(value)
//     }
//     pop(){
//         if(this.item.length==0)
//         {
//             return undefined
//         }
//         this.item.pop()
//     }

//     peek(){
//         if(this.item.length==0)
//         {
//             console.log("no data");
//             return
//         }
//        return this.item[this.item.length-1]
//     }

//     print()
//     {
//         for(let i=this.item.length-1;i>=0;i--)
//         {
//             console.log(this.item[i]);
//         }
//         return
//     }

// }

// const st=new Stack()

// st.push(100)

// st.push(200)
// st.push(300)
// st.print()
// console.log(st.peek());
// console.log("........");
// st.pop()
// st.print()



// class Node{
//     constructor(value)
//     {
//         this.data=value
//         this.next=null
//     }
// }
// class Stack
// {
//     constructor()
//     {
//         this.top=null

//     }

//     push(value)
//     {
//         let newNode=new Node(value)
//         if(this.top==null)
//         {
//             this.top=newNode
//             return
//         }
//         newNode.next=this.top
//         this.top=newNode
//         return
//     }
//     pop(value)
//     {
//         const newNode=new Node(value)
//         if(this.top==0)
//         {
//             console.log("stack underflow");
//             return
//         }
//         this.top=this.top.next

//     }
//     print()
//     {
//         let current=this.top
//         while(current)
//         {
//             console.log(current.data);
//            current=current.next
//         }
//     }
//     peek()
//     {
//         if(this.top==null)
//         {
//             console.log("this stack is empty");
//             return
//         }
//         console.log(this.top.data);
//     }
// }

// const stl=new Stack()

// stl.push(9)
// stl.push(2)
// stl.push(7)
// stl.print()
// console.log(".........");

// stl.pop()
// stl.print()
// console.log("................................");
// stl.peek()


class Node{
    constructor(value)
    {
        this.data=value
        this.next=null
    }
}

class Stack{
    constructor()
    {
        this.top=null
    }

    push(value)
    {
        const newNode=new Node(value)
        if(this.top==null)
        {
            this.top=newNode
            return
        }
        newNode.next=this.top
        this.top=newNode
    }
    pop(){
        if(this.top==null)
        {
            return "underflow"
        }
        this.top=this.top.next

    }
    peek()
    {
        if(this.top==null)
        {
            return "no element"
        }
        return this.top.data
    }
    print()
    {
        let current=this.top
        while(current)
        {
            console.log(current.data);
            current=current.next
        }
    }
}
const sm=new Stack()

sm.push(9)
sm.push(3)
sm.push(2)
sm.print()
sm.pop()
sm.pop()
sm.pop()
console.log("==");
sm.print()
console.log(sm);



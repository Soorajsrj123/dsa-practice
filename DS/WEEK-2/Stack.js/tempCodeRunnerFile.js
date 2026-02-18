class Node{
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
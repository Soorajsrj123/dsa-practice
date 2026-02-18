// class Node {
//     constructor(value)
//     {
//         this.data=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor()
//     {
//         this.head=null
//         this.tail=null
//     }

//     prepand(value)
//     {
//         const newnode=new Node(value)
//         if(this.head==null)
//         {
//             this.head=newnode
//             this.tail=this.head
//             return
//         }
//         newnode.next=this.head
//         this.head=newnode
//     }

//     append(value)
//     {
//         const newNode=new Node(value)
//         if(this.head==null)
// {
//     this.head=newNode
//     this.tail=this.head
//     return
// }
// this.tail.next=newNode
// this.tail=newNode

//     }

//     removefirst()
//     {

//     }
// }



// function Mergesort(arr){
//     if(arr.length<2)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)

//     return Merge(Mergesort(left),Mergesort(right))

// }

// function Merge(left,right)
// {
//     let res=[]
//     while(left.length&&right.length)
//     {
//         if(left[0]<=right[0])
//         {
//             res.push(left.shift())
//         }
//         else{
//             res.push(right.shift())
//         }
//     }
//     return[...res,...left,...right]

// }

// console.log(Mergesort([5,1,8,3,1]));






// function Quicksort(arr)
// {
//     if(arr.length<2)
//     {
//         return arr
//     }
//     let p=arr[arr.length-1]
//     let rightarr=[]
//     let leftarr=[]
//     for(let i=0;i<arr.length-1;i++)
//     {
//         if(arr[i]<p)
//         {
//             leftarr.push(arr[i])
//         }
//         else{
//             rightarr.push(arr[i])
//         }
//     }
//     return[...Quicksort(leftarr),p,...Quicksort(rightarr)]

// }

// console.log(Quicksort([4,2,9,5,1]));

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
        const newnode=new Node(value)

        if(this.top==null)
        {
            this.top=newnode
        }
        else{
            newnode.next=this.head
            this.head=newnode
        }
    }

    pop()
    {
        if(this.top==null)
        {
            return "stack underflow"
        }
        this.top=this.top.next

    }
    peek()
    {
        if(this.top){
            console.log(this.top.data);
        }
        else{
            console.log("no data");
        }
    }
    size(){
        let current=this.top
        let count =0
        while(current)
        {
               count=count+1
               current=current.next
        }
        return count
    }

}

const st=new Stack()

st.push(12)
st.push(9)
st.push(11)

console.log(st);


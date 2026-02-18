// let a=[1,2,3,4]
// let b=[9,8,7,6]
// console.log(" before a=",a);
// console.log(" before b=",b);



// for(let i=0;i<a.length;i++)
// {

//   [a[i],b[i]]=[b[i],a[i]]

// }

// console.log(a,"a");
// console.log(b,"b");


// insertAtIndex(data, index){

//   //if index is not valid
//   if (index < 0 && index > this.size) return;

//   //if index ==0

//   if (index === 0) {
//     let current = this.head
//     let newNode = new node(data, this.head)
//     this.head = newNode
//     this.head.next = current
//     return
//   }

  //insert at index

//   let count = 0
//   let prev
//   while (count < index){
//     prev = current;
//     current = current.next;
//     count++
//   }
//   let newNode = new node(data)

//   newNode.next = current
//   prev.next = newNode

// }


// arrtolist(arr){

//   this.head   =  new node(arr[0],this.head)
//   let current = this.head

//   for(i=1;i<arr.length;i++){
//     let newNode = new node(arr[i])
//     current.next = newNode
//     current = current.next
//   }


// }

// let a=[3,4,5,6]


// for(let i=0;i<a.length;i++)
// {
  
// }

// let a=['apple','orange','mango']

//  b=a.concat(a)
// console.log(b);

let arr=[5,6,3,2,1]
let k=3

arr.sort((a,b) =>
{
  console.log(a,b,"pair");
  a-b
});
console.log( arr);
// function calc(a,k)
// {
//   let temp;
//   for(let i=0;i<a.length-1;i++)
//   {
//     for(let j=i+1;j<a.length;j++)
//     {
//       if(a[i]>a[j])
//       {
//         temp=a[i]
//         a[i]=a[j]
//         a[j]=temp
//       }
     
//     }
//   }
//   console.log(a);
//   return a[k-1]
// }

// console.log(calc(a,k));

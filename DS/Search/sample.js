
// let arr=[3,5,7,9,12,56]

// let value=56
// let f=0
// let e=arr.length-1
// let mid;

// function BinarySearch(arr,value)
// {
//     for(let i=0; i< arr.length; i++) {

//         mid=Math.floor(f+e/2)

        
//         console.log(mid,"mid",i);
//       if(arr[mid]==value)
//       {
//       console.log("value is at index=",mid);
//       return mid +1
//       }     

//       if(value<arr[mid])
//       {
//         e=mid-1
//         mid=e
//       }else{
//         f=mid+1
//         mid=f
//       }
       
//     }
//     return false
// }
// console.log(BinarySearch(arr,value));

    
let str="sooraj"

let reset=str[str.length-1]+str.slice(1,-1)+str[0]
console.log(reset);



class Node{
  constructor(value)
  {
    this.value=value
  }
}


const ll =new Node(99)

console.log(typeof(ll));
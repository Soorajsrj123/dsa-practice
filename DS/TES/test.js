

// function Bublesort(arr)
// {

//     for (let i = 0; i < arr.length; i++) {
        
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[j]>arr[j+1])
//             {
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr

// }

// let arr=[6,3,9,2,1,2]

// console.log(Bublesort(arr));

// function Insertion(arr)
// {
//     let i,key,j
//     for(i=1;i<arr.length;i++)
//     {
//         key=arr[i]
//         j=i-1
//         while(j>=0&&arr[j]>key)
//         {
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=key
//     }
//     return arr
// }

// let arr=[ 1, 2, 4, 4, 9, 2 ]

// console.log(Insertion(arr));


// function InsertionSort(arr)
// {
//     let i,key,j

//     for ( i = 1; i < arr.length; i++) {
        
//         key=arr[i]
//         j=i-1
//         while(j>=0&&arr[j]>key)
//         {
//             console.log("rrr");
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=key
//     }
//     return arr
// }

// let arr=[1,2,3,4,5]
// console.log(InsertionSort(arr))

// function selection(arr)
// {
//    for (let i = 0; i < arr.length; i++) {
//         let min=i
//         for(let j=i+1;j<arr.length;j++)
//         {
//             console.log("kk");
//             if(arr[min]>arr[j])
//             {
//                 min=j
//             }
//         }
//        let temp=arr[i]
//        arr[i]=arr[min]
//        arr[min]=temp
//    }
//    return arr
// }
// let arr=[1,2,3,4,5]

// console.log(selection(arr));


// function MergeSort(arr)
// {
//     if(arr.length<2)
//     {
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let leftarray=arr.slice(0,mid)
//     let rightarray=arr.slice(mid)
//     return Merge(MergeSort(leftarray),MergeSort(rightarray))


// }

// function Merge(left,right)
// {
//  let ot=[]

//  while(left.leftarray&&right.length)
//  {
//     if(left[0]<=right[0])
//         {
//             ot.push(left.pop())
//         }
//         else{
//             ot.push(right.pop())

//         }

//  }
 
// }




// function Mergesort(arr)
// {
//     if(arr.length<2)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftarr=arr.slice(0,mid)
//     let rightarr=arr.slice(mid)
//     return merge(Mergesort(leftarr),Mergesort(rightarr))

// }

// function merge(left,right)
// {
//     let res=[]

//     while(left.length&&right.length)
//     {
//         if(left[0]<=right[0])
//         {
//          res.push(left.shift())
//         }
//         else{
//             res.push(right.shift())
//         }
//     }
//     return [...res,...left,...right]
// }

// let arr=[1,8,1,4,2,1,9]


// console.log(Mergesort(arr));

const a=4
const w='4'

console.log(a==w);
console.log(a===w);
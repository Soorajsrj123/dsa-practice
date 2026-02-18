

// function MergeSort(arr)
// {
//     if(arr.length<2)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftarr=arr.slice(0,mid)
//     let rightarr=arr.slice(mid)

//     return Merge(MergeSort(leftarr),MergeSort(rightarr))
// }

// function Merge(left,right)
// {
//     let output=[]
//     while(left.length&&right.length)
//     {

      
//     if(left[0]<right[0])
//     {
//         output.push(left.shift())
//     }
//     else{
//         output.push(right.shift())
//     }
// }
//    return [...output,...left,...right]
// }

// let arr=[5,2,9,2,1]

// console.log(MergeSort(arr))



const obj = {};
obj.name = "Nathan";
obj.hasOwnProperty=true

console.log(obj.hasOwnProperty("name")); // true
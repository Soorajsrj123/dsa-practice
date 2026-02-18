// let a=[2,3,4,5,6,66,8,88,9]
// b=[]
// c=[]
// for(let i=0;i<a.length-1;i++){
//     if(a[i]%2==0){
//      b.push(a[i])
  
//     }else{
//         c.push(a[i])
     
//     }
   
// }
// console.log(c);
// console.log(b);


let arr=[3,6,9,2,5]
let odd=[]
let even=[]

for(i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
       even.push(arr[i])    
    }
    else{
        odd.push(arr[i])
    }
}
console.log(even);
console.log(odd);

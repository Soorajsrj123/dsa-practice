// let a=[5,3,9,3,1]

// let temp;
// for(i=0;i<a.length;i++)
// {
//     for(j=i+1;j<a.length;j++)
//     {
//         if(a[i]>a[j])
//         {
//             temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }

// console.log(a);

let arr=[1,2,3,4,5]
let b=[]
let max=arr[0]
function calc(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i]
        }
    }

  for(let i=0;i<arr.length;i++)
  {
    b.push(arr[i]+3)
    if(max>b[i])
    {
        return true
    }
  }
return false
}


console.log(calc(arr));
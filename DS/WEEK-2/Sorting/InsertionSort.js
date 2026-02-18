

// let a=[4,2,6,8,3,1]

// let key,j,i

// for(let i=1;i<a.length;i++)
// {
//     key=a[i]
//     j=i-1
//     while(j>=0&&a[j]>key)
//     {
//         a[j+1]=a[j]
//         j=j-1
//     }
//     a[j+1]=key
    
// }

// console.log(a);


let arr=[ 1, 2, 4, 4, -9, 2 ]

function InsertionSort(arr)
{
    let key,i,j
    for ( i = 1; i < arr.length; i++) {
       
        key=arr[i]
        j=i-1
        while(j>=0&&arr[j]>key)
        {
          arr[j+1]=arr[j]
          j=j-1
        }
        arr[j+1]=key
    }
    return arr
}

console.log(InsertionSort(arr));
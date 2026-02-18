
// DELETE FROM SPECIFIC POSITION

// let a=[2,4,6,7,4]

// let length=a.length
// let pos=3

//     for(i=pos-1;i<length;i++)
//     {
//         a[i]=a[i+1]
//     }
// length--

// for(i=0;i<length;i++)
// {
// console.log(a[i]);
// }


// DELETE FROM FIRST
let a=[2,4,6,7,4]
let length=a.length

for(i=0;i<length;i++)
{
    a[i]=a[i+1]
}
a.pop()
console.log(a);

// DELETE FROM LAST

// let a=[4,7,2,9,3]

// console.log(a.splice(-1));


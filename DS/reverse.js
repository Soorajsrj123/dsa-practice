// let a=[3,5,7,2,9]
// let temp=0
// let end=a.length-1

// for(i=0;i<end;i++)
// {
// temp=a[i]
// a[i]=a[end]
// a[end]=temp
// end--
// }

// console.log(a);

// METHOD 2

let a=[4,3,3,2,5]

let temp=0
for(i=0,j=a.length-1;i<j;i++,j--)

{
temp=a[i]
a[i]=a[j]
a[j]=temp
}
console.log(a);
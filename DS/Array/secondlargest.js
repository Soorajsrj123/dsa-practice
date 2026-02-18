let a=[9,2,6,200,1]

let first=-1
let second=-1

for(let i=0;i<a.length;i++)
{
    if(a[i]>first)
    {
        second=first
        first=a[i]
    }
    else if(a[i]>second&&a[i]!=first)
    {
        second=a[i]
    }
}
console.log(second);


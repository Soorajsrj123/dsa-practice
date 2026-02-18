

let a=[4,7,7,4]

let temp=0

for(i=0,j=a.length-1;i<j;i++,j--)
{
    if(a[i]!=a[j])
    {
        temp=1
        break;
    }
}

if(temp==0)
{
    console.log(" palindrome");
}
else{
    console.log("not palindrome");
}

let arr=[10,4,13,3,2]

function minmax(a)
{
    let min=a[0]
    let max=a[0]
    for(i=0;i<a.length;i++)
    {
        if(a[i]<min)
        {
            min=a[i]
        }
        if(a[i]>max)
        {
            max=a[i]
        }

    }
    return [min,max]
}


console.log(minmax(arr));


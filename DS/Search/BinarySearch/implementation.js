

let a=[5,6,7,55,61,64]

let f=0
let l=a.length-1
let target=61
let mid;


function BinarySearch(a,value)
{

    for(let i=0;i<a.length;i++)
    {
        mid=Math.floor(f+l/2)
        console.log(mid,"mm");
        if(a[mid]==value)
        {
            return mid
        }
        if(a[mid]<target)
        {
            f=mid+1
        }else{
            l=mid-1
        }
    }
    return false
}

console.log(BinarySearch(a,target));


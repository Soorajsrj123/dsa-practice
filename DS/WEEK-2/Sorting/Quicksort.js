

////////EFICIENT METHOD WITHOUT USING TWO ARRAY



function Quicksort(arr,low,high)
{
    if(low<high)
    {
        let p=partition(arr,low,high)
        Quicksort(arr,low,p-1)
        Quicksort(arr,p+1,high)

    }
    return arr

}

function partition(arr,low,high)
{
    let pivot=arr[low]
    let start=low
    let end=high
    while(start<end)
    {
        while(arr[start]<=pivot)
        {
            start++
        }
        while(arr[end]>pivot)
        {
            end--
        }
        if(start<end)
        {
            [arr[start],arr[end]]=[arr[end],arr[start]]
        }
    }
    [arr[end],arr[low]]=[arr[low],arr[end]]
    return end
}

let arr=[6,2,9,4,2,1]

let low=0
let high=arr.length-1
// console.log(Quicksort(arr,low,high));






function Quicksort2(arr)
{
    if(arr.length<2)
    {
        return arr
    }
    let pivot=arr[arr.length-1]
    let leftarray=[]
    let righyrray=[]
    for (let i= 0; i <arr.length-1; i++) {
        if(arr[i]<pivot)
        {
            leftarray.push(arr[i])
        }
        else{
            righyrray.push(arr[i])
        }
    }
   
    return [...Quicksort2(leftarray),pivot,...Quicksort2(righyrray)]
}

console.log(Quicksort2(arr));
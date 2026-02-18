

function Merge(arr)
{

    if(arr.length<2)
    {
        return arr
    }
   
    const mid=Math.floor(arr.length/2)
    const left=arr.slice(0,mid)
    const right=arr.slice(mid)
    return  MergeSort(Merge(left),Merge(right))


}

function MergeSort(left,right)
{
   
    let output=[]
    while(left.length&&right.length)
    {
        

        if(left[0]<=right[0])
        {
            output.push(left.shift())
        }
        else{
            output.push(right.shift())
        }
    }
  return  [...output,...left,...right]
}
let arr=[4,2,9,7,1]
console.log(Merge(arr));
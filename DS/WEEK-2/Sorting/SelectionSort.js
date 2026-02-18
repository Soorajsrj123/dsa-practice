let a=[2,4,6,9,3,1]


function SelectionSort(arr)
{
    let min,temp
   
    for(let i=0;i<arr.length;i++)
    {
        min=i
        for (let j=i+1; j < arr.length; j++) {
            if(arr[j]<arr[min])
            {
                min=j
            } 
        }
      temp=arr[i]
      arr[i]=arr[min]
      arr[min]=temp
    }
    return arr

}

console.log(SelectionSort(a));
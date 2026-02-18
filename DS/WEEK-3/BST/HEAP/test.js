function Heap(array)
{
   for(let i=Math.floor(array.length/2)-1;i>=0;i--)
   {
    Heapify(array,i,array.length)
   }
   for(let i=array.length-1;i>0;i--)
   {
    let temp=array[i]
    array[i]=array[0]
    array[0]=temp
    Heapify(array,0,i)
   }

   return array
}

function Heapify(array,parent,index)
{
    let left=2*parent+1
    let right=2*parent+2
    let largest=parent
    if(left<index&&array[left]>array[largest])
    {
        largest=left
    }
    if(right<index&&array[right]>array[largest])
    {
        largest=right
    }
    if(largest!==parent)
    {
        let temp=array[parent]
        array[parent]=array[largest]
        array[largest]=temp
        Heapify(array,largest,index)
    }
    
}

console.log(Heap([30,60,10,40,20,15]));
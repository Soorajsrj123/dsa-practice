class Heap{
    constructor()
    {
        this.heap=[]
    }
     getParent(index)
     {
        return Math.floor((index-1)/2)
     }

    insert(value)
    {
        this.heap.push(value)
        this.heapyfyUP(this.heap.length-1)
    }

    heapyfyUP(index)
    {
        if(index==0)
        {
            return
        }
        let parent=this.getParent(index)
        if(this.heap[index]<this.heap[parent])
        {
            this.swap(index,parent)
            this.heapyfyUP(parent)
        }
    }

    delete()
    {
      let root=this.heap[0]
      this.heap[0]=this.heap.pop()
      this.heapyfyDown()
      return root
    }

    heapyfyDown(index=0)
    {
         let left=2*index+1
         let right=2*index+2
         let min=index
         if(left<this.heap.length&&this.heap[left]<this.heap[min])
         {
            min=left
         }
         if(right<this.heap.length&&this.heap[right]<this.heap[min])
         {
            min=right
         }
         if(min!==index)
         {
            this.swap(index,min)
            this.heapyfyDown(min)
         }
    }
    
}
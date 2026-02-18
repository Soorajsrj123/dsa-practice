class Heap{
    constructor()
    {
        this.heap=[]
    }

    buildHeap(array)
    {
           this.heap=array
           for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--)
           {
            this.Minheap(i)
           }
    }
    Minheap(i)
    {
        let left=2*i+1
        let right=2*i+2
        let min=i
        if(left<this.heap.length&&this.heap[left]<this.heap[min])
        {
            min=left
        }
        if(right<this.heap.length&&this.heap[right]<this.heap[min])
        {
            min=right
        }
        if(min!==i)
        {
            [this.heap[min],this.heap[i]]=[this.heap[i],this.heap[min]]
            this.Minheap(min)
        }
    }
    
}

let ll=new Heap()
ll.buildHeap([10,8,44,12,1])

console.log(ll.heap);




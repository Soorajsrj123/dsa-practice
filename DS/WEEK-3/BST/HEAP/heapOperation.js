class heap{
    constructor()
    {
        this.heap=[]
    }
    getParent(index)
    {
        return Math.floor((index-1)/2)
    }
    swap(index1,index2)
    {
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }

    insert(value)
    {
        this.heap.push(value)
        // console.log(this.heap.length-1);
        this.heapfyUp(this.heap.length-1)
    }

    heapfyUp(index)
    {
        if(index==0)
        {
            return 
        }
        let parent=this.getParent(index)
        if(this.heap[index]<this.heap[parent])
        {
            this.swap(index,parent)
            this.heapfyUp(parent)
        }
    }

    delete()
    {
        if(this.heap.length==0)
        {
            return null
        }
        if(this.heap.length==1)
        {
            return this.heap.pop()
        }
        const root=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapfyDown()

        return root
    }
    heapfyDown(index=0)
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
            this.swap(min,index)
            this.heapfyDown(min)
        }

    }
}
let ll=new heap()
ll.insert(9)
ll.insert(15)
ll.insert(6)
ll.insert(2)
ll.insert(10)
console.log(ll.delete());

console.log(ll.heap);
BreasthfirstSearch()
 {
    if(this.root==null)
    {
return false
    }
     let queue=[]
     queue.push(this.root)
    while(queue.length)
    {
        let current=queue.shift()
        console.log(current.value);
        if(current.left)
        {
            queue.push(current.left)
        }
        if(current.right)
        {
            
            queue.push(current.rightr)
        }
    }
 }
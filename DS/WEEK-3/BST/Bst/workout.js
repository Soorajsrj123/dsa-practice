class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor()
    {
        this.root=null
    }

    insert(value)
    {
        let newnode=new Node(value)
        if(this.root==null)
        {
            this.root=newnode
            return this
        }
        let current=this.root

        while(true)
        {
            if(value==current.value)
            {
                return "duplicate"
            }
            if(value<current.value)
            {
                if(!current.left)
                {
                    current.left=newnode
                    return
                }
                current=current.left
            }
            else{
                if(value>current.value)
                {
                    if(!current.right){
                        current.right=newnode
                        return
                    }
                    current=current.right
                }
            }
        }
    }
    lookup(value)
    {
     if(this.root==null)
     {
        return "no data"
     }
     let current=this.root
     while(current)
     {
        if(value<current.value)
        {
            current=current.left
        }
        else if(value>current.value){
              current=current.right
        }
        else {
            return true
        }

     }
     return false
    }
    min(root)
    {
     
        if(!root.left)
        {
       
            return root.value
        }
        else{
        return this.min(root.left)
        }
    }
    
    BreadthFirstSearch()
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
            queue.push(current.right)
        }
     }
    }

    min(root)
    {
        if(!root.left)
        {
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

   

    delete(value)
    {
        this.root=this.deleteHelper(this.root,value)
    }
    deleteHelper(root,value)
    {
        if(root==null)
        {
            return root
        }
        if(value<root.value)
        {
            root.left=this.deleteHelper(root.left,value)
        }
        else if(value>root.value)
        {
            root.right=this.deleteHelper(root.right,value)
        }
        else{
            if(!root.left&&!root.right)
            {
                return null
            }
            if(!root.left)  
            {
                return root.right
            }
            else if(!root.right){
                     return root.left
            }
           root.value=this.min(root.right)
           root.right=this.deleteHelper(root.right,root.value)
        }
        return root
    }

    preorder(root)
    {
        if(root!==null)
        {
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
   
    postOrder(root)
    {
        if(root!==null)
        {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    inOrder(root)
    {
        if(root!==null)
        {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    closest(target)
    {
        let current=this.root
        let closest=current.value
       while(current!==null)
       {
        if(target==current.value){
            return current.value
        }
        if(Math.abs(target-closest)>Math.abs(target-current.value))
        {
            closest=current.value
        }
         if(target<current.value)
         {
            current=current.left
         }
         else {
            current=current.right
         }
       } 
        
       return closest
    }

    
}

let tt=new BST()
tt.insert(20)
tt.insert(10)
tt.insert(11)
tt.insert(30)
tt.insert(25)
tt.insert(1)
// tt.BreadthFirstSearch()
tt.delete(10)
// console.log("------");
// tt.BreadthFirstSearch()
// console.log("------");
// tt.preorder(tt.root)
// console.log("=======");
// console.log(tt.closest(2));

// console.log(tt);
// console.log(tt.lookup(15));
// console.log(tt.min(tt.root));
// tt.BreadthFirstSearch()
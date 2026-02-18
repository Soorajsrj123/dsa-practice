
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
        let newNode=new Node(value)
        if(this.root==null)
        {
          this.root=newNode
          return this
        }
        let current=this.root
        while(true)
        {
            if(value==current.value)
            {
                return "duplicate occurs"
            }
            if(value<current.value)
            {
                if(!current.left){
                    current.left=newNode
                    return this
                }
                current=current.left
            }
            else {
               if(value>current.value){
                   if(!current.right)
                    {
                    current.right=newNode
                    return this
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
            else if(value>current.value)
            {
                current=current.right
            }
            else{
                return true
            }
        }
        return false
    }

 preorder(root)
 {
    debugger;
    if(root)
    {
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
    }
 }




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
        this.min(root.left)
    }
 }
 
 
}

let tt=new BST()
tt.insert(9)
tt.insert(10)
tt.insert(7)
tt.insert(11)
tt.BreasthfirstSearch()
// tt.preorder(tt.root)
console.log(tt.min(tt.root));
console.log(tt);
// console.log(tt.lookup(9),"g");






class Node{
    constructor(value)
    {
        this.value=value
        this.right=null
        this.left=null

    }
}
class Bst{
    constructor()
    {
        this.root=null
    }

    insert(value)
    {
        let newNode=new Node(value)
if(!this.root)
{
    this.root=newNode
    return
}
let current=this.root
while(true)
{
   
    if(value==current.value)
    {
        return 'sorry'
    }
    if(value<current.value)
    {
        if(!current.left)
        {
            current.left=newNode
            return this
        }
        current=current.left
    }
    if(value>current.value)
    {
        if(!current.right)
        {
            current.right=newNode
            return this
        }
        current=current.right
    }
}
    }

    lookup(value)
    {
        if(this.root==null)
        {
            return false
        }
        let current=this.root
        while(current){
            if(value==current.value)
            {
                return true
            }
            else if(value<current.value)
            {
                current=current.left
            }
            else{
                current=current.right
            }
        }
    }
}
breadthfirstsearch()
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
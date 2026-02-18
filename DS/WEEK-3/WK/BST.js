class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
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
                return "duplicate"
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
            return null
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

    delete(value)
    {
        this.root=this.deleteHelper(this.root,value)
    }
    deleteHelper(root,value)
    {
        if(root==null)
        {
            return false
        }
        if(value<root.value)
        {
             root.left=this.deleteHelper(root.left,value)
        }
       else if(value>root.value)
        {
            root.right=this.delete(root.right,value)
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
            else if(!root.right)
            {
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
            console.log("kk");
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
            if(Math.abs(target-closest)>Math.abs(target-current.value))
            {
                closest=current.value
            }
            if(target==current.value)
            {
                return current.value
            }
           else if(target<current.value)
            {
                current=current.left
            }
            else{
                current=current.right
            }
           
        }
        return closest
    }
}

let bst=new Bst()
bst.insert(5)
bst.insert(3)
bst.insert(6)
bst.insert(1)
console.log(bst.lookup(3));
console.log(bst.closest(4));
// console.log(bst.delete(3));
// console.log(bst.lookup(3));
// bst.inOrder(bst.root)
// console.log(bst.root);

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

    insert(value){
        let newnode=new Node(value)
        if(this.root==null)
        {
            this.root=newnode
            return
        }
        let current=this.root
        while(true)
        {
            if(current.value==value)
            {
                return 'dupi'
            }
            if(value<current.value)
            {
                if(!current.left)
                {
                    current.left=newnode
                    return this
                }
                current=current.left
            }
            else{
                if(value>current.value){
                    if(!current.right)
                    {
                        current.right=newnode
                        return

                    }
                    current=current.right
                }
            }
        }
    }
}
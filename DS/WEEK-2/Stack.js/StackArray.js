

class Stack{
    constructor()
    {
        this.item=[]
    }

    push(value)
    {
        this.item.push(value)
    }
    pop()
    {
        if(this.item.length==0)
        {
            console.log("underflow");
            return
        }
      return  this.item.pop()
    }
    peek()
    {
        return this.item[this.item.length-1]
    }
    print()
    {
        for(let i=this.item.length-1;i>=0;i--)
        {
            console.log(this.item[i]);
        }
    }
}

const st=new Stack()

st.push(2)
st.push(9)
st.pop()
st.push(3)
console.log(st.peek());
st.print()

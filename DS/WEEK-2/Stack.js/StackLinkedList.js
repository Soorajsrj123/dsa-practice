class node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null
    }
}

class stackLL {

    constructor() {
        this.top = null;
    }

    push(data) {

        let newNode = new node(data);

        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

    }

    pop() {
        if (this.top === null) {
            console.warn('stack underflow');
            return
        }
        this.top = this.top.next;
    }

    display() {
        let current = this.top
        while (current) {
            console.warn(current.data);
            current = current.next;
        }
    }

    peek() {
        if (this.top) {
            console.log('peeeek', this.top.data);
        } else {
            console.warn('no Data');
        }
    }
    size()
    {
        let current=this.top
        let count=0
        while(current)
        {
            count=count+1
            current=current.next
        }
        return count
    }

   
}

let ss = new stackLL()

ss.push(1)
ss.push(2)
ss.push(3)
ss.push(4)

// console.log(ss);

ss.pop()

ss.display()

console.log(".........");
console.log(ss.size());
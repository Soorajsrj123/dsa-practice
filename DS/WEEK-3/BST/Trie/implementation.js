// class TrieNode{
//     constructor(){
//         this.children={}
//         this.Endofword=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new TrieNode()
//     }

//     insert(word)
//     {
//         let current=this.root

//         for(let i=0;i<word.length;i++)
//         {
//             let char=word[i]
            
//             if(!current.children[char])
//             {
//                 current.children[char]=new TrieNode()
//             }
//             current=current.children[char]
//         }
//         current.Endofword=true
//     }
//     search(word)
//     {
//         let current=this.root

//         for(let i=0;i<word.length;i++)
//         {
//             let char=word[i]
//             if(!current.children[char])
//             {
//             return false
//             }
//            current=current.children[char]
//         }
//         return current.Endofword
//     }
//    startswith(prefix)
//    {
//      let current=this.root
//      for(let i=0;i<prefix.length;i++)
//      {
//         let char=prefix[i]
//         if(!current.children[char])
//         {
//             return false
//         }
//         current=current.children[char]
//      }
//      return true
//    }

// }


// let tt=new Trie()

// tt.insert("hai")
// tt.search("hai")
// console.log(tt.startswith("hia"));

class TrieNode{
    constructor(){
    this.children={}
    this.endword=false
    }
}

class Trie{
    constructor()
    {
        this.root=new TrieNode()
    }

    insert(word)
    {
        let current=this.root

        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!current.children[char])
            {
                current.children[char]=new TrieNode()
            }
            current=current.children[char]
        }
        current.endword=true
    }
    search(word)
    {
        let current=this.root

        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!current.children[char])
            {
                return false
            }
            current=current.children[char]
        }
        return current.endword
    }
    startWith(prefix)
    {
        let current=this.root
        for(let i=0;i<prefix.length;i++)
        {
            let char=prefix[i]
           if(!current.children[char])
           {
            return false
           }
           current=current.children[char]
        }
        return true
    }

    delete(word)
    {
        if(!word)
        {
            return false
        }

        let node=this.root
      let nodedeleted=[]
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                return false
            }
            nodedeleted.push(node)
            node=node.children[char]
        }

        node.endword=false

        for(let i=nodedeleted.length-1;i>=0;i--)
        {
            let current=nodedeleted[i]
            let char=word[i]
            let childNode=current.children[char]
            if(Object.keys(childNode.children).length==0)
            {
                delete current.children[char]
            }
        }
        return true
    }
}




let ll=new Trie()
ll.insert("haill")
// ll.insert("hello")


console.log(ll.startWith("ha"));

console.log(ll.delete("haill"));
console.log(ll.search("haill"));

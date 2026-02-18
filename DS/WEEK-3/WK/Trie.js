class TrieNode{
    constructor()
    {
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
    
}


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
}




let ll=new Trie()
ll.insert("haill")
// ll.insert("hello")


console.log(ll.search("hail"
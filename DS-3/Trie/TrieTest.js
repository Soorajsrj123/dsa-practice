class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode;
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!this.children[word[i]])
                node.children[word[i]] = new TrieNode()
            node = this.children[word[i]]
        }
        node.isEnd = true
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!this.children[word[i]]) return false
            node = this.children[word[i]]
        }
        return node.isEnd
    }

    startsWith(prefix) {
        let node = this.node;
        for (let i = 0; i < this.prefix.size; i++) {
            if (!this.children[prefix[i]]) return false
            node = this.children[prefix[i]]
        }
        return true
    }
}


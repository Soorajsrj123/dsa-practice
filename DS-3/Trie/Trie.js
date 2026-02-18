
class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!node.children[char])
                node.children[char] = new TrieNode();

            node = node.children[char];
        }
        node.endOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.endOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }

    getAllWords(node, prefix, words) {
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (let child in node.children) {
            this.getAllWords(node.children[child], prefix + child, words);
        }
    }

    autoComplete(prefix) {
        let node = this.search(prefix);
        if (!node) {
            return [];
        }
        let words = [];
        this.getAllWords(node, prefix, words);
        return words;
    }

    delete(word) {
        const traverse = (node, i) => {
            if (i === word.length) {
                node.endOfWord = false;
                return Object.keys(node.children).length === 0;
            }
            const char = word[i];
            if (!node.children[char]) {
                return false;
            }
            const shouldDeleteNode = traverse(node.children[char], i + 1);
            if (shouldDeleteNode) {
                delete node.children[char];
                return Object.keys(node.children).length === 0;
            }
            return false;
        }
        traverse(this.root, 0);
    }
}


const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");
console.log(trie.getAllWords()); // ["apple", "banana", "orange"]
console.log(trie.search("banana")); // true
trie.delete("banana");
console.log(trie.getAllWords()); // ["apple", "orange"]
console.log(trie.search("banana")); // false
class TrieNode {
    constructor(builtString = "") {
        this.builtString = builtString;
        this.isEndOfWord = false;
        this.children = {}; // Key = new letter, value = node
    }
}

class Trie {
    constructor() {
        this.root = null;
    }

    add(newWord, index = 0, currentSpot = this.root) {
        const currentLetter = newWord[index];
        // If the Trie is empty, create a new node with an empty string and start off
        if (this.root === null) {
            this.root = new TrieNode();
            currentSpot = this.root;
        }
        // If we are at the end of the word, we're done adding letters
        if (newWord.length === index) {
            currentSpot.isEndOfWord = true;
            return;
        }
        // Move down the line - and if need be, create a new node
        if (!(currentLetter in currentSpot.children)) { // New letter found, so add letter
            currentSpot.children[currentLetter] = new TrieNode(currentSpot.builtString + currentLetter);
        }
        this.add(newWord, index+1, currentSpot.children[currentLetter]);
    }

    search(newWord, index = 0, currentSpot = this.root) {
        if (currentSpot === this.root && this.root === null) { // Tree is empty, so we can't find any words
            return false;
        }
        // If we are at the end of the word - we've found it!
        if (newWord.length === index) {
            return true;
        }
        const currentLetter = newWord[index];
        if (!(currentLetter in currentSpot.children)) {
            return false;
        } else {
            return this.search(newWord,index+1, currentSpot.children[currentLetter])
        }
    }
}

// Add a word to this Trie (Prefix Tree) data structure
let demoTrie = new Trie();
demoTrie.add("cat");
demoTrie.add("can");
demoTrie.add("canopy");
console.log(demoTrie.search("cat"));
console.log(demoTrie.search("can"));
console.log(demoTrie.search("canopy"));
console.log(demoTrie.search("ca"));
console.log(demoTrie.search("car"));
console.log(demoTrie.search("co"));
// console.log(demoTrie);
// console.log(demoTrie.root);
// console.log(demoTrie.root.children["c"]);
// console.log(demoTrie.root.children["c"].children["a"]);
// console.log(demoTrie.root.children["c"].children["a"].children["n"]);
// console.log(demoTrie.root.children["c"].children["a"].children["n"].children["o"]);
// console.log(demoTrie.root.children["c"].children["a"].children["n"].children["o"].children["p"]);
// console.log(demoTrie.root.children["c"].children["a"].children["n"].children["o"].children["p"].children["y"]);

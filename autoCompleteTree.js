const WordNode = require('./node')

class autoCompleteTree {
    constructor(value) {
        this.value = value
        this.children = {}
        this.endOfWord = false
    }

    addWord(word) {
        word
            .split('')
            .map((chr, i) => i !== word.length - 1 ? new WordNode(chr, false) : new WordNode(chr, true))
            .forEach((chr, i, newWord) => {
                if (i === 0 && !this.children[chr.value]) { return this.children[chr.value] = chr }
                else if (i === 0 && this.children[chr.value]) { newWord[0] = this.children[chr.value] }
                else if (newWord[i - 1].children[chr.value]) { newWord[i] = newWord[i - 1].children[chr.value] }
                else { newWord[i - 1].children[chr.value] = chr }
            })
    }
}

const test = new autoCompleteTree('test')
test.addWord('test')
test.addWord('tests')
test.addWord('this')
test.addWord('that')
test.addWord('what') 
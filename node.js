module.exports = class WordNode {
    constructor(value, endOfWord) {
        this.value = value
        this.children = {}
        this.endOfWord = endOfWord
    }
}
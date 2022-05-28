class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!word in this.words) {
            this.words[word] = `word: ${word}, description: ${description},`;
        } 
    }

    remove(word) {
        delete this.words[word];
    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        console.log(`${this.words[word]} - ${this.words[description]}`);
    }
}

const dictionary = new Dictionary("Толковый словарь");
console.log(dictionary);
dictionary.add("JavaScript", "популярный язык программирования");
console.log(dictionary);
dictionary.add("Веб-разработчик", "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие");
console.log(dictionary);
dictionary.remove("JavaScript");
console.log(dictionary);
dictionary.showAllWords();
console.log(dictionary);
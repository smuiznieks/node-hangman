function Word() {
    this.wordArray = ['Star Wars, The Last Jedi', 'Wonder Woman', 'I, Tonya', 'Phantom Thread', 'Mudbound', 'Darkest Hour', 'The Big Sick', 'The Florida Project', 'The Shape Of Water', 'Dunkirk', 'The Post', 'Lady Bird', 'Get Out'];
    this.newWord = function() {
        currentWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
    };
};

module.exports = Word;

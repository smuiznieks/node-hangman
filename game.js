var inquirer = require('inquirer');
var Word = require('./word');

var wins = 0;
var remainingGuesses;
var currentLetters;
var guessedLetters;
var solution;

function playGame() {
	remainingGuesses = 10;
	guessedLetters = [];
	var currentWord;
	var newGame = new Word();
	newGame.newWord();
	displayHangman();
	prompt();
};

function displayHangman() {
	var display = '';
	solution = [];
	currentLetters = currentWord.split('');
	for (var i = 0; i < currentWord.length; i++) {
		if (currentLetters[i] === ' ') {
			display += '  ';
			solution.push(currentLetters[i]);
		} else if (currentLetters[i] === ',') {
			display += ', ';
			solution.push(currentLetters[i]);
		} else if (guessedLetters.indexOf(currentLetters[i]) !== -1) {
			display += currentLetters[i];
			solution.push(currentLetters[i]);
		} else {
			display += '_ ';
		}
	};
	console.log('\n' + display + '\n');
};

function prompt() {
	if (solution.length === currentLetters.length) {
		wins++;
		console.log('CORRECT!!!\nTotal Wins: ' + wins + '\n');
		promptRestart();
	} else if (remainingGuesses > 0) {
		inquirer.prompt({
			type: 'input',
			message: 'Guess a letter!',
			name: 'userGuess'
		}).then(function(answer) {
			var uppercase = (answer.userGuess).toUpperCase();
			guessedLetters.push(uppercase);
			guessedLetters.push(answer.userGuess);
			// console.log(guessedLetters);
			displayHangman();
			prompt();
		});
	} else if (remainingGuesses < 1) {
		console.log('Out of guesses!\nThe answer was ' + currentWord + '\n');
		promptRestart();
	}
};

function promptRestart() {
	inquirer.prompt({
		type: 'confirm',
		message: 'Would you like to play again?',
		name: 'restartGame'
	}).then(function(answer){
		if (answer.restartGame === true) {
			playGame();
		} else {
			console.log('\nThanks for playing, come again soon!\n');
		}
	});
};

console.log('\n--- Welcome to 2018 Oscars Hangman ---\n\nCan you guess this Best Picture contender?');
playGame();
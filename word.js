//Require Letter constructor function
var Letter = require("./letter.js");

//Constructor function for word
var Word = function (phrase) {
	this.phrase = phrase;
	this.letters = [];
	this.guessed = false;
	this.findLetters = function() {
		for(var 1 = 0; i <this.phrase.length; i++) {
			this.letters.push(new Letter(this.phrase[i]));
		}
	};

//Function to change show from false to true if guessed correctly
	this.foundLetter = function(myLetter) {
		var term = 0;

		for(var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].alphabet == myLetter) {
				this.letters[i].show == true;
				term++;
			}
		}

		return term;
	};

//Function to display phrase
	this.displayPhrase = function() {
		var render = "";

		for(var i = 0; i < this.letters.length; i++) {
			render += this.letters[i].showLetter();
		}

		return term;
	};
}

module.exports = Word;
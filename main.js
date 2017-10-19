//Require npm package and file
var prompt = require("prompt");
var Word = ("./word.js");

//Start the prompt
prompt.start();

//Conditions before start of game
//Phrases array
hangMan = {
	phraseBank : ["a piece of cake", "back to square one", "cry wolf", "drive me nuts", "elvis has left the building", "fish out of water", "go for broke", "hit below the belt", "i smell a rat", "jaws of death"],

//User wins
	Wins : 0,

//User guesses remaining
	guessesRemaining : 10,

//Current phrase
	currentPhrase : null,

//Function at start of game
	gameStart : function(phrase) {
		//Reset guesses remaining back to 10

		this.userGuesses();

		//Phrase for array
		this.currentPhrase = new Word(this.phraseBank[Math.floor(Math.random()* this.phraseBank.length)]);
		this.currentPhrase.findLetters();

		//Call prompt function
		this.keepAsking();

	},

	userGuesses: function() {
		this.guessesRemaining = 10;
	},
	//Function based on npm prompt package
		keepAsking : function() {
			prompt.get(['guessLetter'], function(err, result) {
				console.log("Letter selected: " + result.guessLetter);

		// Var to be able to refer to this
		var self = this;

		//Var for correct guesses
		var correctGuess = self.currentPhrase.foundLetter(result.guessLetter);

		//Check if correct or incorrect letter selected by user
		if (correctGuess == 0) {
			console.log ("Try again!");
			self.guessesRemaining--;
		}
		else {
			console.log("Correct!");
		//If all letters guesses
			if (self.currentPhrase.foundLetter()) {
				console.log("You Win!");
				return;
			}
		}

		console.log(self.currentPhrase.displayPhrase());

		//Keep asking if guesses remaining and phrase has not been guessed
		if ((self.guessesRemaining >0)  && (self.currentPhrase.guessed == false)) {
			this.keepAsking();
		}

		//If guesses wrong 10 letters before finding phrase
		else if (self.guessesRemaining == 0) {
			console.log("Game over");
		}
		else {
			console.log(self.currentPhrase.displayPhrase());
		}

	});
}

};

hangMan.gameStart()

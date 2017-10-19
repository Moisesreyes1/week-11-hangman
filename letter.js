//Letter constructor function
var Letter = function(alphabet, show) {
	this.alphabet = alphabet;
	this.show = false;

	this.showLetter = function() {

		return (this.show) "_" : this.alphabet;
	};
};

module.exports = Letter;
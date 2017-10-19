//Letter constructor function
var Letter = function(alphabet) {
	this.alphabet = alphabet;
	
	this.showLetter = function() {

		return (this.show) "_" : this.alphabet;
	};
};

module.exports = Letter;
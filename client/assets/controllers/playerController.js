app.controller('playerController',
	function(playerFactory, $location, $scope, $window, $routeParams){


	var self = this;
	self.randomword = {};
	self.amountblanks = "";


	var winCounter = 0;
	var lossCounter = 0;
	var remainingGuesses = 6;
	var wrongGuesses = [];
	var letterInPickedWord = [];
	var correct = [];


	//select random word from LinkedIn API and start game
	function beginGame() {
		playerFactory.getRandomWord(function(randomword) {
			// select random word
			self.randomword = randomword;

			console.log("24 ran",randomword);
			var amountblanks = randomword.length;

			letterInPickedWord = randomword.split("");

			console.log('letter in ran',letterInPickedWord); //not working

			for (var i = 0; i < amountblanks; i++) {
				correct.push("__");
				console.log('correct #32', correct);
			}

			console.log('blanks',amountblanks);
			console.log('correct',correct);
			console.log('ran', randomword);

			document.getElementById("guesses-left").innerHTML = remainingGuesses;
			document.getElementById("word-blank").innerHTML = correct.join(" ");
			document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman0.png">'

		})
	}

	beginGame();


	function checkLetters(letter) {

		// console.log("letter 52", letter);
		// playerFactory.getRandomWord(function(randomword) {
			//select random word
			// console.log('self 54',self.randomword);

			var amountblanks = self.randomword.length;

			var letterInWord = false;

			for (var i = 0; i < amountblanks ; i++) {
				if (self.randomword[i] === letter) {
					letterInWord = true;
					console.log("65", letterInWord);
				}
			};

			if (letterInWord) {
				for (var i = 0; i < amountblanks; i++) {
					if (self.randomword[i] === letter) {
						correct[i] = letter;
						console.log("letter in word", correct);
					}
				}
				document.getElementById("word-blank").innerHTML = correct.join(" ");
			} else {
				remainingGuesses--;
				wrongGuesses.push(letter);
				console.log('remaining guesses', remainingGuesses);
				console.log('wrong', wrongGuesses);

				if (remainingGuesses === 6){
					document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman1.png">'
				}
				else if (remainingGuesses === 5){
					document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman2.png">'
				}
				else if (remainingGuesses === 4){
					document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman3.png">'
				}
				else if (remainingGuesses === 3){
					document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman4.png">'
				}
				else if (remainingGuesses === 2){
					document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman5.png">'
				}
				else if (remainingGuesses === 1){
					document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman6.png">'
				}
				else if (remainingGuesses === 0){
					document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman7.png">'
				}
			}
		// })
	};



//key pad

document.onkeyup = function(event){

	var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
	console.log("this is the letter we typed", letterGuessed)
	checkLetters(letterGuessed);
	// roundFinished();
};


})

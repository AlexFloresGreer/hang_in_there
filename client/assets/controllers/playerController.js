app.controller('playerController',
	function(playerFactory, $location, $scope, $window, $routeParams){


	var self = this;
	self.randomword = {};
	// self.amountblanks = "";


	var winCounter = 0;
	var lossCounter = 0;
	var remainingGuesses = 6;

	var wrongGuesses = [];
	var letterInPickedWord = [];
	var correct = [];

	// var chooseDifficulty = 1;

	//starting game
	beginGame();

	//select random word from LinkedIn API and start game
	function beginGame() {
		playerFactory.getRandomWord(function(randomword) {
			// select random word
			self.randomword = randomword;
			console.log("random word",randomword);

			var amountblanks = randomword.length;

			letterInPickedWord = randomword.split("");

			console.log('letter in randomword',letterInPickedWord); //not working

			//choosing difficulty
			// level = document.getElementById("levelSelector").value;
			// console.log('level', level);

			//reseting correct for new game
			correct = [];

			for (var i = 0; i < amountblanks; i++) {
				correct.push("__");
				// console.log('correct guess', correct);
			}

			document.getElementById("guesses-left").innerHTML = remainingGuesses;
			document.getElementById("word-blank").innerHTML = correct.join(" ");
			document.getElementById("zero").innerHTML = '<img id="one" src="../../static/images/game/hangman0.png">'

		})
	}




	function checkLetters(letter) {

			var amountblanks = self.randomword.length;

			var letterInWord = false;

			for (var i = 0; i < amountblanks ; i++) {
				if (self.randomword[i] === letter) {
					letterInWord = true;
				}
			};

			if (letterInWord) {
				for (var i = 0; i < amountblanks; i++) {
					if (self.randomword[i] === letter) {
						correct[i] = letter;
					}
				}
				document.getElementById("word-blank").innerHTML = correct.join(" ");
			}

			else {
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
	};

	function roundFinished(){

		document.getElementById("word-blank").innerHTML = correct.join(" ");
		document.getElementById("guesses-left").innerHTML = remainingGuesses;
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

		if (letterInPickedWord.join(" ") === correct.join(" ")) {
			winCounter ++;

			document.getElementById("win-counter").innerHTML = winCounter;
			wrongGuesses = [];
			document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

			document.getElementById("word-blank").innerHTML = correct.join(" ");

			var millisecondsToWait = 500;
			setTimeout(function() {
				alert("You Win!");
				beginGame();
			}, millisecondsToWait);


			// beginGame();
			// alert("You Win!");

		}

		else if (remainingGuesses === 0) {

			document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
			document.getElementById("loss-counter").innerHTML = lossCounter ++;
			remainingGuesses = 6;
			wrongGuesses = [];

			document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
			document.getElementById("loss-counter").innerHTML = lossCounter ++;
			document.getElementById("guesses-left").innerHTML = remainingGuesses;

			var millisecondsToWait = 500;
			setTimeout(function() {
				alert("You Lost! the word was " + self.randomword);
				beginGame();
			}, millisecondsToWait);

			// beginGame();
		}

	};


	//key pad
	document.onkeyup = function(event){

		var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
		console.log("this is the letter we typed", letterGuessed)
		checkLetters(letterGuessed);
		roundFinished();
	};


})

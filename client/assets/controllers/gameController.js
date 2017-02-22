app.controller('gameController',
	function(gameFactory, userFactory, $location, $scope, $window, $routeParams){

	$scope.user;
	$scope.image;
	$scope.levels = [1,2,3,4,5,6,7,8,9,10];
	$scope.level = $scope.levels[0];
	$scope.hint;

	var self = this;
	self.randomWord = {};

	var winCounter = 0;
	var lossCounter = 0;
	var remainingGuesses = 6;

	var wrongGuesses = [];
	var charsOfWord = [];
	var correctGuesses = [];


	function getUserData() {
		userFactory.getUser(function(lUser) {
				if(lUser) {
						$scope.user = lUser;
				}
				else {
						$location.url('login');
				}
		});
	}


	beginGame();

	//select random word from LinkedIn API and start game
	function beginGame() {
		getUserData();
		gameFactory.getRandomWord(function(randomWord) {
			self.randomWord = randomWord;
			console.log(self.randomWord);
			var amountBlanks = randomWord.length;
			charsOfWord = randomWord.split("");
			$scope.image = "hangman0.png";
			winCounter = $scope.user.wins;
			lossCounter = $scope.user.losses;
			if(!$scope.$$phase) {
				$scope.$apply();
			}
			$scope.hint = "";

			correctGuesses = [];

			//reseting correctGuesses for new game
			for (var i = 0; i < amountBlanks; i++) {
				correctGuesses.push("__");
			}

			updateScore();

		})
	};

	$scope.levelSelector = function() {
		console.log($scope.level);
		gameFactory.selectDifficulty($scope.level);
		beginGame();
	}

	$scope.getHint = function() {
		$scope.hint = "Word starts with " + self.randomWord[0] + " and ends with " + self.randomWord[self.randomWord.length-1];

	}


	function charCheckAgainstWord(letter) {
			var amountBlanks = self.randomWord.length;
			var letterInWord = false;

			for (var i = 0; i < amountBlanks ; i++) {
				if (self.randomWord[i] === letter) {
					correctGuesses[i] = letter;
					letterInWord = true;
				}
			}

			//WrongGuesses.indexOf returns -1 if the char is not in wrongGuesses array
			if (!letterInWord && wrongGuesses.indexOf(letter) === -1) {
				remainingGuesses--;
				wrongGuesses.push(letter);
				updateHangmanImage(remainingGuesses);
			}

			updateScore();
	};

	function updateHangmanImage(remainingGuesses) {
		if (remainingGuesses === 6){
				$scope.image = "hangman1.png";
		}
		if (remainingGuesses === 5){
				$scope.image = "hangman2.png";
		}
		if (remainingGuesses === 4){
				$scope.image = "hangman3.png";
		}
		if (remainingGuesses === 3){
				$scope.image = "hangman4.png";
		}
		if (remainingGuesses === 2){
				$scope.image = "hangman5.png";
		}
		if (remainingGuesses === 1){
				$scope.image = "hangman6.png";
		}
		if (remainingGuesses === 0){
				$scope.image = "hangman7.png";
		}
		//forces $scoope to refresh
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	}

//gameResult = you win or you lose
	function displayResult(gameResult) {
		userFactory.updateScore($scope.user, function(data) {
			$scope.user = data;
		});

		wrongGuesses = [];
		updateScore();
		remainingGuesses = 6;

		var millisecondsToWait = 500;
		setTimeout(function() {
			alert(gameResult);
			beginGame();
		}, millisecondsToWait);
	}

	function updateScore() {
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
		document.getElementById("word-blank").innerHTML = correctGuesses.join(" ");
		document.getElementById("guesses-left").innerHTML = remainingGuesses;
	}

	function isGameEnded(){
		if (charsOfWord.join(" ") === correctGuesses.join(" ")) {
			winCounter++;
			$scope.user.wins = winCounter;
			displayResult("You Win!")
		}
		else if (remainingGuesses === 0) {
			lossCounter++;
			$scope.user.losses = lossCounter;
			displayResult("You Lost! the word was " + self.randomWord);
		}
	};

/*
 * onkeyup receives a keyboard event
 * after receiving keyboard event it runs
 * it runs function to check letter typed against randomWord
 * then runs function to check if it's the end of game round
 */
	document.onkeyup = function(event){

		var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
		console.log("this is the letter we typed", letterGuessed)
		charCheckAgainstWord(letterGuessed);
		isGameEnded();
	};

})

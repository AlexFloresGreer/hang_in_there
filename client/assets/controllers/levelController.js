app.controller('levelController',
	function(gameFactory, userFactory, $location, $scope, $window, $routeParams){

    $scope.level;

    function levelSelector() {
  		gameFactory.getRandomWord(function(randomword) {
  			self.randomword = randomword;
  			// console.log("random word",randomword);
  			var amountblanks = randomword.length;
  			letterInPickedWord = randomword.split("");
  			console.log('letter in randomword',letterInPickedWord); //not working

  			// $scope.image = "hangman0.png";

})

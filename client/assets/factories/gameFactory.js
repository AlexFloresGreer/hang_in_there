app.factory('gameFactory', function($http){

	var words = [];
	var factory = {};

	factory.getRandomWord = function(callback) {
		var corsURL = 'http://localhost:8080/';
		var linkedInAPI = 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words';

		$http.get(corsURL + linkedInAPI, {
			params: {
				difficulty: 5,
				minLength: 3,
				maxLength: 8
			},
		}).success(function(api_response) {
			words = api_response;
			var wordList = words.split("\n");
			var wordCount = wordList.length-1;
			var randomNum = Math.floor((Math.random() * wordCount) + 0);

			var word = wordList[randomNum].toUpperCase();
			words.guess = word;
			callback(word);
		})
	}

	return factory;
})

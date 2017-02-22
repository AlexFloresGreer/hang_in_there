app.factory('gameFactory', function($http){

	var words = [];
	var factory = {};

	var levelSelector = 1;

	factory.getDefinition = function(word) {
		let dictionaryUrl = 'http://www.dictionary.com/browse/' + word;
		ctrl.url = dictionaryUrl;
	};

	factory.selectDifficulty = function(level) {
		levelSelector = level;
		console.log('lselector', levelSelector);
	}

	factory.getRandomWord = function(callback) {
		console.log('callbackkkk', callback);

		var corsURL = 'http://localhost:8080/';
		var linkedInAPI = 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words';

		$http.get(corsURL + linkedInAPI, {
			params: {
				difficulty: levelSelector,
				// minLength: 3,
				// maxLength: 8
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

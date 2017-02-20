console.log('we are in playerFactory');

app.factory('playerFactory', function($http){

	var words = [];
	var factory = {}; //defines factory

	// factory.current_user = {name:null, id:null};

	//Getting a random word from LinkedIn API and pass it to Front End
	factory.getRandomWord = function(callback) {
		// console.log('hitting getwords');
		var cors_url = 'http://localhost:8080/';
		var li_url_api = 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words';

		$http.get(cors_url + li_url_api, {
			params: {
				hard: 5,
				min: 3,
				max: 8,
			},
		}).success(function(api_response) {
			// callback(output);
			words = api_response;
			// console.log(api_response);
			// console.log(words);
			var wordList = words.split("\n");
			var wordCount = wordList.length-1;
			var randomNum = Math.floor((Math.random() * wordCount) + 0);

			var word = wordList[randomNum].toUpperCase();
			// console.log('word???', word)
			words.guess = word;
			// console.log(word[5]);
			// callback(wordList);
			callback(word);
		})
	}


	return factory;
})

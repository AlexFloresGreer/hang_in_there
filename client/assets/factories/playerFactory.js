console.log('we are in playerFactory');

app.factory('playerFactory', function($http){

	var words = [];
	var factory = {};

	// factory.current_user = {name:null, id:null};

	factory.getWords = function(callback) {
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
			console.log('word???', word)
			words.guess = word;

			// console.log(word[5]);
			//callback
			// callback(wordList);
			callback(word);
		})
	}

	// factory.getRandomWord = function(callback) {
	// 	console.log('hitting random word in factory');
	// 	// randomword = callback;;
	// 	// console.log(randomword);
	// 	// console.log(words);
	// 	// callback(randomword);
	// 	// console.log("randomword factory",randomword);
	// }

	// factory.getSession = function(callback){
	// 	$http.get('/user/session').success(function(output){
	// 		callback(output)
	// 	})
	// }
	// factory.login = function(user, callback){
	// 	var data = {name: user}
	// 	$http.post('/login', data).success(function(output){
	// 		if(output.error){
	// 			alert('please fill everything out')
	// 		} else {
	// 			factory.current_user = {name: output.name, _id: output._id}
	// 			if(factory.current_user){
	// 				callback(factory.current_user)
	// 			}
	// 		}
	// 	})
	// }
	// factory.getUser = function(callback){
	// 	$http.get('/getAll').success(function(output){
	// 		factory.current_user = {name: output.first_name, _id: output._id};
	// 		callback(factory.current_user)
	// 	})
	// }
	// factory.getOneUser = function(id, callback){
	//
	// 	$http.post('/user/getone/'+id, id).success(function(output){
	// 		callback(output)
	// 	})
	// }
	return factory;
})

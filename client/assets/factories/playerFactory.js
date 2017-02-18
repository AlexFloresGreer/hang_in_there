console.log('we are in playerFactory');

app.factory('playerFactory', function($http){

	var words = {};
	var factory = {};

	// factory.current_user = {name:null, id:null};

	factory.getWords = function(callback) {
		console.log('hitting getwords');
		$http.get('http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words').success(function(api_response) {
			// callback(output)
			words = api_response.data;
			console.log(words);
		})
	}



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

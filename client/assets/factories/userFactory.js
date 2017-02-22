app.factory('userFactory', ['$http', function($http){
    var factory = {}
    var user;

    factory.login = function(lUser, success, error){
        $http.post('/login', lUser).then(function(data){
            if(data.data.errors){
                error(data.data.errors);
            }else{
                user = data.data;
                success(user);
            }
        });
    }

    factory.logout = function() {
      user = null;
    }

    factory.getUser = function(callback){
        callback(user);
    }

    factory.getAllUsers = function(callback) {
      $http.get('/leaderboard')
      .success(function(usersData) {
        callback(usersData)
      }).catch(console.log('ERROR users in database not found'));
    }

    factory.updateScore = function(user, callback){
  		$http.put('/update/' + user._id, user)
  		.success(function(returnData){
        // console.log('returnData', returnData);
  			callback(returnData);
  		})
  	}

    return factory;

}]);

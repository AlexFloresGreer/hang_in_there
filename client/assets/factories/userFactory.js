console.log('hitting userFactory');

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

    factory.getUser = function(callback){
        callback(user);
    }

    factory.getAllUsers = function(callback) {
      console.log('getAllUsers?')
      $http.get('/leaderboard')
      .success(function(usersData) {
        console.log('ud', usersData);
        callback(usersData)
      }).catch(console.log('error'));
    }


    factory.updateScore = function(user, callback){
  		$http.put('/update/' + user._id, user)
  		.success(function(returnData){
        console.log('returnData', returnData);
  			callback(returnData);
  		})
  	}
    // factory.logout = function(){
    //     user = null;
    // }

    return factory;

}]);

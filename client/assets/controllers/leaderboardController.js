app.controller('leaderboardController', function(gameFactory, userFactory, $location, $scope, $window, $routeParams){

	$scope.allusers;

  userFactory.getAllUsers(function(allusers) {
    if(allusers) {
      $scope.allusers = allusers
    }
		else {
      console.log('ERROR users not found');
    }
  })

})

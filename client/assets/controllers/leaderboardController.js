console.log('LC?');

app.controller('leaderboardController', function(playerFactory, userFactory, $location, $scope, $window, $routeParams){

	$scope.allusers;


//displaying all users

  userFactory.getAllUsers(function(allusers) {
    // console.log('allusers', allusers);
    console.log('hitting ALLU')
    if(allusers) {
      $scope.allusers = allusers
      // console.log($scope.allusers);
    } else {
      console.log('users not found');
    }
  })

})

// console.log('LC?')
// app.controller('leaderboardController', ['$scope', 'userFactory', '$location',
//   function($scope, userFactory, $location){
//
//     $scope.allusers;
//     $scope.errors;
//
//     $scope.getAllUsers = function(){
//         userFactory.getAllUsers($scope.allusers, function(allusers){
//             $location.url('/leaderboard')
//         },
//         function(error){
//             $scope.errors = error;
//         });
//     }
// }]);

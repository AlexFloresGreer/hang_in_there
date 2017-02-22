app.controller('userController', ['$scope', 'userFactory', '$location',
  function($scope, userFactory, $location){

    $scope.errors;

    $scope.login = function() {
        userFactory.login($scope.user, function(nUser) {
            $location.url('/game')
        },
        function(error) {
            $scope.errors = error;
        });
    }

    $scope.logout = function() {
      userFactory.logout();
      $location.url('login');
    }

}]);

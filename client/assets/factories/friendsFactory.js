(function(){

	angular
		.module("app")
		.factory("friendFactory", friendFactory);

		function friendFactory($http){
			var factory = {
				addFriends: addFriends,
				getFriends: getFriends,
				getOneFriend: getOneFriend,
				deleteFriend: deleteFriend,
				editFriend: editFriend
			};
			return factory;

			function addFriends(newFriend, callback){
				$http.post('/friends', newFriend).success(function(Friend){
					callback(Friend);
          console.log(newFriend,callback, 'adding friends in factory');
				})
			}
			function getFriends(callback){
				$http.get('/friends').success(function(Friends){
					callback(Friends);
				})
			}
			function getOneFriend(index, callback){
				$http.get('/friends/' + index).success(function(Friend){
					callback(Friend);
				})
			}
			function deleteFriend(index, callback){
				$http.delete('/friends/' + index).success(function(friends){
					callback(friends);
				})
			}
			function editFriend(index, updateFriend, callback){
				$http.put('/friends/' + index, updateFriend).success(function(friends){
					callback(friends);
				})
			}
		}

})();

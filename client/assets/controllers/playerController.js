app.controller('playerController',
	function(playerFactory, $location, $scope, $window, $routeParams){



	var self = this;
	self.allwords = [];
	self.words = {};
	// self.word = {}
	populateWords();

	// self.allProducts = [];
	// self.oneProduct = {};
	// self.prod = {};
	// self.deleteProduct = deleteProduct;
	// self.getOneProduct = getOneProduct;
	// self.editProduct = editProduct;
	//

	//make function that gets words from factory
	// store it in a var and pass it to the front end

	// factory.getWords = function(callback) {
	// 	console.log('hitting getwords');
	// 	$http.get('http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words').success(function(api_response) {
	// 		// callback(output)
	// 		words = api_response.data;
	// 		console.log(words);
	// 	})
	// }

	function populateWords() {
		console.log('populateWords');
		playerFactory.getWords(function(listofwords) {
			self.allwords = listofwords;
		})

	}

	// if($routeParams.id){
	// 	getSession();
	// 	getOneProduct($routeParams.id);
	// }
	// else if(!$routeParams.id){
	// 	getProductsListing();
	// }
	//
	//
	// function getSession () {
	// 	userFactory.getSession(function(factoryData){
	// 		self.current_user = factoryData.user.name
	// 		self.current_pic = factoryData.user.pic
	// 		if(self.current_user ==null){
	// 			self.current_null = null
	// 			$window.location.href= "/main#/listings";
	// 		}
	// 	})
	// }

	// function getProductsListing(){
	// 	getSession();
	// 	productFactory.getProductsListing(function(data){
	// 		self.allProducts = data;
	// 		self.prod = self.allProducts[0];
	// 	})
	// }
	//
	// function deleteProduct(index){
	// 	productFactory.deleteProduct(index, function(data){
	// 		self.allProducts = data;
	// 	});
	// }
	//
	// function getOneProduct(index){
	// 	productFactory.getOneProduct(index, function(data){
	// 		self.oneProduct = data;
	// 	})
	// }
	//
	// function editProduct(index){
	// 	productFactory.editProduct(index, self.prod, function(data){
	// 		self.allProducts = data;
	// 		$location.url('/listings');
	// 	})
	// }
})

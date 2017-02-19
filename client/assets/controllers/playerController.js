app.controller('playerController',
	function(playerFactory, $location, $scope, $window, $routeParams){



	var self = this;
	self.allwords = [];
	self.words = {};
	self.randomword = {};
	// self.random = random;
	populateWords();
	// displayRandomWord();

	// self.allProducts = [];
	// self.oneProduct = {};
	// self.prod = {};
	// self.deleteProduct = deleteProduct;
	// self.getOneProduct = getOneProduct;
	// self.editProduct = editProduct;
	//

	//make function that gets words from factory
	// store it in a var and pass it to the front end

	function populateWords() {
		console.log('populateWords');
		playerFactory.getWords(function(randomword) {
			// self.allwords = listofwords
			//select random word
			self.randomword = randomword;
			// console.log("listofwords",listofwords);
			console.log('ran', randomword);
		})
	}

	// function displayRandomWord() {
	// 	console.log('hitting display random word in controller')
	// 	playerFactory.getRandomWord(function(randomword) {
	// 		// self.randomword = randomword.word;
	// 	})
	//
	// }



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

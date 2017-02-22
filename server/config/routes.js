var path = require('path');
var mongoose = require('mongoose');
var userController = require(path.join(__dirname, '..', 'controllers', 'userController.js'))

module.exports = function(app){

  app.post("/login", userController.login);

  app.put('/update/:id', function(req,res){
  		userController.update(req,res);
  	})

	app.get('/leaderboard', function(req,res){
		userController.display(req,res);
	})

}

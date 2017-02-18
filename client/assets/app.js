var app = angular.module('app', ['ngRoute', 'ngFileUpload']);

app.config(function ($routeProvider) {

   $routeProvider
      .when("/game", {
         templateUrl: "./partials/game.html"
      })
      // .when("/edit/:id", {
      //    templateUrl: "./partials/edit.html"
      // })
      .when("/newplayer", {
         templateUrl: "./partials/newplayer.html"
      })
      // .when("/show", {
      //    templateUrl: "./partials/show.html"
      // })
      // .when("/show/:id", {
      //    templateUrl: "./partials/show.html"
      // })
      .otherwise({
         redirectTo: "/"
      });
})

app.factory("friendsFactory")

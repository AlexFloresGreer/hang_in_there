var app = angular.module('app', ['ngRoute', 'ngFileUpload']);

app.config(function ($routeProvider) {

   $routeProvider
      .when("/game", {
         templateUrl: "./partials/game.html"
      })

      .when("/newplayer", {
         templateUrl: "./partials/newplayer.html"
      })
      .when("/leaderboard", {
         templateUrl: "./partials/leaderboard.html"
      })
      // .when("/show/:id", {
      //    templateUrl: "./partials/show.html"
      // })
      .otherwise({
         redirectTo: "/"
      });
})

app.factory("playerFactory")

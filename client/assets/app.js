var app = angular.module('app', ['ngRoute', 'ngFileUpload']);

app.config(function ($routeProvider) {

   $routeProvider
      .when("/game", {
         templateUrl: "./partials/game.html"
      })

      .when("/login", {
         templateUrl: "./partials/login.html"
      })

      .when("/leaderboard", {
         templateUrl: "./partials/leaderboard.html"
      })

      .otherwise({
         redirectTo: "/login"
      });
})

app.factory("playerFactory")

var app = angular.module("app", ['ngRoute','ngAnimate']);

app.config(function($routeProvider){
    $routeProvider
        .when("/welcome", {
            templateUrl: "app/partial/welcome.html",
            controller: "AppCtrl"
        })
        .when("/second", {
            templateUrl: "app/partial/second.html",
            controller: "AppCtrl2"
        })
});


app.controller("AppCtrl", function($scope){
  $scope.model = {
    message: "This is my app!!!"
  }
});
app.controller("AppCtrl2", function($scope){
  $scope.model = {
    message: "This is my app!!!"
  }
});
var app = angular.module("app", ['ngRoute','ngAnimate']);
////////////////////////////////////////////////////////////////////////////////
// ROUTING
////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////
// CONTROLLERS
////////////////////////////////////////////////////////////////////////////////
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


////////////////////////////////////////////////////////////////////////////////
// DIRECTIVES
////////////////////////////////////////////////////////////////////////////////

/**
 * Menu resize directive
 */
app.directive('resizable', function($window) {
    return function($scope) {
        $scope.initializeWindowSize = function() {
          return $scope.windowHeight = ( ( ($window.innerHeight > 200) ? $window.innerHeight-74 : 100) ) + "px";
        };
        $scope.initializeWindowSize();
        return angular
            .element($window)
                .bind('resize', function() {
                    console.log($scope.windowWidth + "," + $scope.windowHeight);
                    $scope.initializeWindowSize();
                    return $scope.$apply();
                });
    };
});

app.directive('menuizer', function() {
    return {
        restrict: "A",
        link: function(scope,element,doc) {
            element.bind("click", function() {
                element.css("backgroundColor","cyan");
                //console.log(element[0]);
            });
        }
        
    };
});
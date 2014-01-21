var ngtlantic = angular.module('ngtlantic', ['ngRoute']);
 
ngtlantic.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', {templateUrl: 'home.html', controller: "HomeController"
      }).
      when('/search', {
        templateUrl: 'search.html', controller: "SearchController"
      }).
      when('/list', {
        templateUrl: 'list.html', controller: "ListController"
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

ngtlantic.controller("HomeController", ["$scope", "$location", function ($scope, $location) {
    'use strict';
    
    $scope.showMap = function (string) {
        $location.path(string);
    };
    
}]);
ngtlantic.controller("SearchController", ["$scope", "$location", function ($scope, $location) {
    'use strict';
    
    $scope.showMap = function (string) {
        $location.path(string);
    };
    
}]);
ngtlantic.controller("ListController", ["$scope", "$location", function ($scope, $location) {
    'use strict';
    
    $scope.showMap = function (string) {
        $location.path(string);
    };
    
}]);
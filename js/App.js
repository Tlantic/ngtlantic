/* global angular */ 

angular.module('ngtlantic', ['ngRoute']);

angular.module('ngtlantic').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', { templateUrl: 'home.html', controller: "HomeController" });
    $routeProvider.when('/search', { templateUrl: 'search.html', controller: "SearchController" });
    $routeProvider.when('/list', { templateUrl: 'list.html', controller: "ListController" });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
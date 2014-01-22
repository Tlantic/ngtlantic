/* global angular */ 

angular.module('ngtlantic', ['ngRoute']);

angular.module('ngtlantic').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', { templateUrl: '/partials/home.html', controller: "HomeController" });
    $routeProvider.when('/search', { templateUrl: '/partials/search.html', controller: "SearchController" });
    $routeProvider.when('/list', { templateUrl: '/partials/list.html', controller: "ListController" });
    $routeProvider.when('/result/:term', { templateUrl: '/partials/list.html', controller: "ResultController" });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
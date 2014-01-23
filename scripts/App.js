/* global angular */ 

angular.module('ngtlantic', ['ngRoute']);

angular.module('ngtlantic').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/search', { templateUrl: '/View/search.html', controller: "SearchController"});
    $routeProvider.when('/list', { templateUrl: '/View/list.html', controller: "ListController"});
    $routeProvider.when('/result/:term', { templateUrl: '/View/list.html', controller: "ResultController"});
    $routeProvider.otherwise({ redirectTo: '/search' });
}]);


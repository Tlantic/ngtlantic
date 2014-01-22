/* global angular, console */ 

angular.module('ngtlantic').controller("ResultController", ["$scope","$http", "$routeParams", function ($scope, $http, $routeParams) {
    'use strict';
    
    $scope.title="";
    $scope.itemList = [];
    
    console.log('Loading data from server....');
    
    $http.get('http://10.51.100.5:9200/salesptpt/items/_search?q=Name:' + $routeParams.term)
    
    .success(function (stuff) {
        console.debug('Success search!', stuff);
        
        $scope.title = "Showing 10 from " + stuff.hits.total + " records...";
        $scope.itemList = stuff.hits.hits;
    })
    
    .error(function () {
        console.error('File not found!');
    });
    
}]);
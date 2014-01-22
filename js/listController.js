/* global angular, console */ 

angular.module('ngtlantic').controller("ListController", ["$scope","$http", function ($scope, $http) {
    'use strict';
    
    $scope.title=" First 50 items from server";
    $scope.itemList = [];
    
    console.log('Loading data from file....');
    
    $http.get('http://10.51.100.5:9200/salesptpt/items/_search?size=50')
    
    .success(function (stuff) {
        console.debug('Success reading file!', stuff);
        
        $scope.itemList = stuff.hits.hits;
    })
    
    .error(function () {
        console.error('File not found!');
    });
    
}]);
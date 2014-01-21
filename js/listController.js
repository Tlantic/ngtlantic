/* global angular, console */ 

angular.module('ngtlantic').controller("ListController", ["$scope","$http", function ($scope, $http) {
    'use strict';
    
    $scope.itemList = [];
    
    console.log('Loading data from file....');
    
    $http.get('data/items.json')
    
    .success(function (stuff) {
        console.debug('Success reading file!', stuff);
        
        $scope.itemList = stuff.result;
    })
    
    .error(function () {
        console.error('File not found!');
    });
    
}]);
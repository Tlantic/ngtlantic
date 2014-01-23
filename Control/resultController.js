/* global angular, console */ 

angular.module('ngtlantic').controller("ResultController", ["$scope","$routeParams","serviceProducts", function ($scope,$routeParams,serviceProducts) {
    'use strict';
    
    $scope.title="";
    $scope.itemList = [];
    
    console.log('Loading data from server....');
    
    serviceProducts.search($routeParams.term)
    
    .success(function (stuff) {
        console.debug('Success search!', stuff);        
        $scope.title = "Showing 10 from " + stuff.hits.total + " records...";
        $scope.itemList = stuff.hits.hits;
    })
    
    .error(function () {
        console.error('File not found!');
    });
    
}]);
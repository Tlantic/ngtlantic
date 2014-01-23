/* global angular, console */ 

angular.module('ngtlantic').controller("ListController", ["$scope", "serviceProducts", function ($scope,serviceProducts) {
    'use strict';
    
    $scope.title=" First 50 items from server";    
    
    serviceProducts.list().success(function (stuff) {        
        console.debug('Success reading file!', stuff);        
        $scope.itemList = stuff.hits.hits;        
    })
    
    .error(function () {        
        console.error('File not found!');        
    });
    
}]);




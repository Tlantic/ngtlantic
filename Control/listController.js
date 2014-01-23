/* global angular, console */ 

angular.module('ngtlantic').controller("ListController", ["$scope", "serviceProducts", function ($scope,serviceProducts) {
    'use strict';
    
    $scope.title=" First 50 items from server";    
    
    var onSuccess = function (stuff) {        
        console.debug('Success reading file!', stuff);        
        $scope.itemList = stuff.hits.hits;        
    };
    
    var onError = function () {        
        console.error('File not found!');        
    };
    
    serviceProducts.list().then(onSuccess, onError);
    
}]);




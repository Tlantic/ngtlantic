/* global angular, console */ 

angular.module('ngtlantic').controller("SearchController", ["$scope","$http", function ($scope,$http) {
    'use strict';
    //http://10.51.100.5:9200/salesptpt/items/_search?q=name:FORNO*
    $scope.itemList = [];
    $http.get('http://10.51.100.5:9200/salesptpt/items/_search?size=50')
    
    .success(function (stuff) {
        console.debug('Success reading file!', stuff);
        
        $scope.itemList = stuff.hits.hits;
    })
    
    .error(function () {
        console.error('File not found!');
    });
}]);
/* global angular */ 

angular.module('ngtlantic').controller("SearchController", ["$scope","$location", function ($scope, $location) {
    'use strict';
    
    $scope.query = "";
    
    $scope.doSearch = function () {
        $location.path('/result/' + $scope.query);        
    };
}]);
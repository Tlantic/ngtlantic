/* global angular */ 

angular.module('ngtlantic').controller("SearchController", ["$scope","$location", function ($scope, $location) {
    'use strict';
    //http://10.51.100.5:9200/salesptpt/items/_search?q=name:FORNO*
    
    $scope.query = "";
    
    $scope.doSearch = function () {
        $location.path('/result/' + $scope.query);
    };
}]);
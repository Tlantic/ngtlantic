/* global angular */ 

angular.module('ngtlantic').controller("rootController", ["$scope", "$location", function ($scope, $location) {
    'use strict';
    
    $scope.goTo = function (string) {
        $location.path(string);
    };
    
}]);
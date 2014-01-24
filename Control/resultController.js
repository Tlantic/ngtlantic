/* global angular, console */ 

angular.module('ngtlantic').controller("ResultController", ["$scope","$routeParams","serviceProducts", function ($scope,$routeParams,serviceProducts) {
    'use strict';
    
    $scope.title="";
    $scope.itemList = [];
    
    console.log('Loading data from server....');
    
    serviceProducts.search($routeParams.term).then(
        //se deu certo!
        function(result){
            console.debug('Success search!', result);        
            $scope.title = "Showing 10 from " + result.hits.total + " records...";
            $scope.itemList = result.hits.hits;
        },//se deu errado!
        function(){
            console.error('File not found!');
        }
        
    );
    

    
}]);
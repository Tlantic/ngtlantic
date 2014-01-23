/*global angular, console*/
angular.module('ngtlantic').service('serviceProducts',function($http,$location){
    
    this.list=function(){        
        return $http.get('http://10.51.100.5:9200/salesptpt/items/_search?size=50');                
    };   
    
    this.search = function(text){
        return  $http.get('http://10.51.100.5:9200/salesptpt/items/_search?q=name:' + text);
    };
});
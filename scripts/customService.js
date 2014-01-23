/*global angular, console*/
angular.module('ngtlantic').service('serviceProducts',["$http", "$q", function($http, $q){
    
    var p, 
        
        send = function (url) {
            return $http.get(url);
        };
    
    this.list=function() {
        
        // criando uma promessa
        p = $q.defer();
        
        send('http://10.51.100.5:9200/salesptpt/items/_search?size=50').success(
            function (dados) {
                p.resolve(dados);
            }
            
        ).error(
            
            function () {
                p.reject();
            }
            
        );
        
        
        // retornar a promessa
        return p.promise;
    };   
    
    
    
    this.search = function(text){
        return  send('http://10.51.100.5:9200/salesptpt/items/_search?q=name:' + text);
    };
}]);
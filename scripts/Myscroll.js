/*global angular,console,window*/

angular.module('ngtlantic').directive("myScroll",function(){
    return function(scope,elm,attrs){
        
        angular.element(window).bind('scroll', function() {
            
            console.log(this.pageYOffset);  
            
        });
    };    
});

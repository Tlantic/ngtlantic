/*global angular,console,window*/

angular.module('ngtlantic').directive("myScroll",function(){
    return function(scope,elm,attrs){
        
        angular.element(window).bind('scroll', function() {
            
            if (elm[0].scrollTop >=  (elm[0].offsetHeight - (window.innerHeight + 10))) {
                alert('FIM!');
            }
        });
    };    
});

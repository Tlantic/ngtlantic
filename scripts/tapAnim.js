/* global angular */
angular.module("ngtlantic").directive("tapAnim", function () {
    
    return function (scope, elm, attrs) {

        elm.addClass("animated");
        
        elm.bind("click", function () {
            if (elm.hasClass("expanded")) {
                elm.removeClass("expanded");
            } else {
                elm.addClass("expanded");
            }

        });
        
        
    };
    
});
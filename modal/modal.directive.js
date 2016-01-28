(function(currentScriptPath) {
    'use strict';

    angular.module("mandatory")
        .directive('manModal', [manModal]);

    function manModal() {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope: {
                title: '@',
            },
            //link: link,
            templateUrl: currentScriptPath.replace('modal.directive.js', 'modal.html'),
        };

/*
        function link(scope, element, attrs, ngModel) {
           scope.$watch(function () {
                ngModel.config = ngModel.getConfig(ngModel.folder.lob,ngModel.folder.type);
           }, function(newValue) {
                // ...
           });
        }
*/
        function controller() {
            var vmd = this;

            vmd.files = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
            
        }
    }
})((function currentScriptPath() {
        var scripts = document.getElementsByTagName("script");
        var currentScriptPath = scripts[scripts.length - 1].src;
        return currentScriptPath;
    })());

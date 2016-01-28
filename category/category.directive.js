(function(currentScriptPath) {
    'use strict';

    angular.module("mandatory")
        .directive('category', [category]);

    function category() {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope: {
                title: '@',
                defaultValues: '='
            },
            templateUrl: currentScriptPath.replace('category.directive.js', 'category.html'),
        };

        //call ang-link if needed

        function controller() {
            var vmd = this;

        }
    }
})((function currentScriptPath() {
        var scripts = document.getElementsByTagName("script");
        var currentScriptPath = scripts[scripts.length - 1].src;
        return currentScriptPath;
    })());

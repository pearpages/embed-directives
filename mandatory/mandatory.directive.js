(function(currentScriptPath) {
    'use strict';

    angular.module("mandatory")
        .directive('mandatory', [mandatory]);

    function mandatory() {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope: {
                title: '@',
                folder: '='
            },
            //link: link,
            templateUrl: currentScriptPath.replace('mandatory.directive.js', 'mandatory.html'),
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
        function controller(mandatoryConfig) {
            var vmd = this;

            vmd.bodyHidden;
            vmd.hideBody = hideBody;

            activate();

            function activate() {
                vmd.bodyHidden = false;
                vmd.config = mandatoryConfig.getConfig('TRI','whatever');
            }

            function hideBody() {
                vmd.bodyHidden = !vmd.bodyHidden;
            }
        }
    }
})((function currentScriptPath() {
        var scripts = document.getElementsByTagName("script");
        var currentScriptPath = scripts[scripts.length - 1].src;
        return currentScriptPath;
    })());

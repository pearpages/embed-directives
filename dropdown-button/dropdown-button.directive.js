(function() {
    'use strict';

    angular.module("mandatory")
        .directive('dropdownButton', dropdownButton);

    dropdownButton.$inject = ['$sce'];

    function dropdownButton($sce) {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope: {
                options: '=',
                current: '=',
                onMyChange: '&'
            },
            template: ['<div class="btn-group" uib-dropdown is-open="status.isopen">',
                '<button id="single-button" type="button" class="btn btn-default" uib-dropdown-toggle ng-disabled="disabled">',
                '<span ng-bind-html="vmd.render(vmd.options[vmd.current].render())"></span>',
                '<span class="caret"></span>',
                '</button>',
                '<ul uib-dropdown-menu role="menu" aria-labelledby="single-button" class="efolder">',
                '<li ng-repeat="(key,value) in vmd.options" role="menuitem">',
                '<a ng-click="vmd.changeValue(key)" herf="javascript:void(0)" ng-bind-html="vmd.render(value.render())"></a>',
                '</li>',
                '</ul>',
                '</div>'
            ].join('')
        };

        function controller() {

            var vmd = this;
            vmd.render = render;
            vmd.changeValue = changeValue;

            function render(html) {
                return $sce.trustAsHtml(html);
            }

            function changeValue(value) {
                vmd.onMyChange({
                    value: value
                });
            }
        }
    }
})();

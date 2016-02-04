(function() {
    'use strict';

    angular.module("mandatory")
        .directive('category', category);

    function category() {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: function () {},
            scope: {
                title: '@',
                defaultValues: '=',
                files: '='
            },
            template: ['<div class="well">',
                            '<h4>{{vmd.title}}</h4>',
                            '<div ng-repeat="(key,default) in vmd.defaultValues">',
                                '<file title="{{default.description}}" default-value="{{default.value}}" files="vmd.files[key]"></file>',
                            '</div>',
                        '</div>'].join('')
        };

    }
})();

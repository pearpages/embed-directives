(function() {
    'use strict';

    angular.module("mandatory")
        .directive('mandatory', mandatory);

    function mandatory() {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope: {
                title: '@',
                folder: '=',
                defaultValues: '='
            },
            template: ['<div class="panel panel-primary">',
    '<div class="panel-heading" ng-click="vmd.hideBody()" data-toggle="tooltip" data-placement="left">',
        '<span uib-tooltip="{{vmd.title}}">{{vmd.title}}</span>',
    '</div>',
    '<div class="panel-body" ng-hide="vmd.bodyHidden">',
        '<div class="row">',
            '<div class="col-md-6 col-sm-6">',
                '<category title="{{vmd.defaultValues.uwDoc.description}}" files="vmd.folder.files[\'uwDoc\']" default-values="vmd.defaultValues.uwDoc.data"></category>',
                '<category title="{{vmd.defaultValues.facout.description}}" files="vmd.folder.files[\'facout\']" default-values="vmd.defaultValues.facout.data"></category>',
            '</div>',
            '<div class="col-md-6 col-sm-6">',
                '<category title="{{vmd.defaultValues.policyDoc.description}}" files="vmd.folder.files[\'policyDoc\']" default-values="vmd.defaultValues.policyDoc.data"></category>',
                '<category title="{{vmd.defaultValues.crossSelling.description}}" files="vmd.folder.files[\'crossSelling\']" default-values="vmd.defaultValues.crossSelling.data"></category>',
            '</div>',
        '</div>',
    '</div>',
'</div>'].join('')
        };

        function controller() {
            var vmd = this;

            vmd.bodyHidden;
            vmd.hideBody = hideBody;

            activate();

            function activate() {
                vmd.bodyHidden = false;
            }

            function hideBody() {
                vmd.bodyHidden = !vmd.bodyHidden;
            }
        }
    }
})();

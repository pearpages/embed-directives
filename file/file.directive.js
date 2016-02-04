(function() {
    'use strict';

    angular.module("mandatory")
        .directive('file',file);

    file.$inject =  ['modalWindow','mockFiles','fileConfig'];

    function file(modalWindow,mockFiles,fileConfig) {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope: {
                title: '@',
                defaultValue: '@',
                files: '='
            },
            template: ['<div class="row">',
    '<div class="col-xs-8 well">',
        '<uib-alert type="danger" ng-hide="vmd.modalHidden" close="vmd.closeModal()">You cannot drag files being N/A</uib-alert>',
        '<div ng-click="vmd.addFile()">{{vmd.title}}</div>',
    '</div>',
    '<div class="col-xs-1">',
        '<a href="javascript:void(0)" ng-show="vmd.hasFiles()" ng-click="vmd.openFilesModal()">',
            '<span class="glyphicon glyphicon-paperclip"></span> {{vmd.getNumberOfFiles()}}',
        '</a>',
    '</div>',
    '<div class="col-xs-3">',
        '<dropdown-button options="vmd.options" current="vmd.currentState" on-my-change="vmd.changeState(value)"></dropdown-button>',
    '</div>',
'</div>'].join('')
        };

        function controller(modalWindow,mockFiles,fileConfig) {

            var vmd = this;
            vmd.currentState;
            vmd.options;
            vmd.modalHidden;
            vmd.hasFiles = hasFiles;
            vmd.getNumberOfFiles = getNumberOfFiles;
            vmd.addFile = addFile;
            vmd.removeFile = removeFile;
            vmd.closeModal = closeModal;
            vmd.openFilesModal = openFilesModal;
            vmd.changeState = changeState;

            activate();

            function openFilesModal() {
                modalWindow.open(vmd.title,vmd.files,vmd.removeFile);
            }

            function activate() {
                vmd.options = fileConfig.getStates();
                vmd.modalHidden = true;
                initButton();
            }

            function initButton() {
                if (vmd.files.files > 0) {
                    changeState('issued');
                } else {
                    //default value
                    changeState(vmd.defaultValue);
                }
            }

            function closeModal() {
                vmd.modalHidden = true;
            }

            function changeState(state) {
                if(hasFiles()){
                    if(state === 'na'){
                        alert('There are already files!');
                    } else {
                        vmd.currentState = state;
                    }
                } else {
                    vmd.currentState = state;
                }
            }

            function addFile() {
                if (vmd.currentState !== 'na') {
                    if(vmd.files.length === angular.isUndefined() || vmd.files.length === 0){
                        vmd.files = [];
                    }
                    vmd.files.push(mockFiles.mock(1)[0]);
                    changeState('issued');
                } else {
                    vmd.modalHidden = false;
                }
            }

            function removeFile() {
                if (vmd.files.length === 0 && vmd.currentState === 'issued') {
                    changeState('pending');
                }
            }

            function hasFiles() {
                if (vmd.files.length > 0) {
                    return true;
                } else {
                    return false;
                }
            }

            function getNumberOfFiles() {
                return vmd.files.length;
            }
        }
    }
})();

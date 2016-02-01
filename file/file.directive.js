(function(currentScriptPath) {
    'use strict';

    angular.module("mandatory")
        .directive('file', ['$uibModal','mockFiles',file]);

    function file($uibModal,mockFiles) {
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
            templateUrl: currentScriptPath.replace('file.directive.js', 'file.html'),
        };

        //call ang-link if needed

        function controller(fileConfig, $sce) {

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

            activate();

            function openFilesModal() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: currentScriptPath.replace('file.directive.js', 'modal.html'),
                    controller: function($uibModalInstance) {
                        var vm = this;

                        vm.ok = ok;
                        vm.cancel = cancel;
                        vm.title = vmd.title;
                        vm.files = vmd.files;
                        vm.delete = vmd.removeFile;

                        function ok() {
                            $uibModalInstance.close($scope.selected.item);
                        };

                        function cancel() {
                            $uibModalInstance.dismiss('cancel');
                        };
                    },
                    controllerAs: 'vm'
                });
            }

            function activate() {
                vmd.options = fileConfig.states;
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
                vmd.currentState = state;
            }

            function addFile() {
                if (vmd.currentState !== 'na') {
                    if(vmd.files.length === undefined || vmd.files.length === 0){
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
})((function currentScriptPath() {
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;
    return currentScriptPath;
})());

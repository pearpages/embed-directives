(function(currentScriptPath) {
    'use strict';

    angular.module("mandatory")
        .directive('file', ['$uibModal', file]);

    function file($uibModal) {
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
            vmd.icon;
            vmd.disabled;
            vmd.modalHidden;
            vmd.nextState = nextState;
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
                vmd.modalHidden = true;
                vmd.disabled = false;
                initButton();
            }

            function initButton() {
                if (vmd.files.files > 0) {
                    setButtonIssued();
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
                vmd.icon = $sce.trustAsHtml(fileConfig.states[state].render());
            }

            function setButtonIssued() {
                changeState('issued');
                vmd.disabled = true;
            }

            function addFile() {
                if (vmd.currentState !== 'na') {
                    vmd.files.files++;
                    setButtonIssued();
                } else {
                    vmd.modalHidden = false;
                }
            }

            function removeFile() {
                if (vmd.currentState !== 'na') {
                    if (vmd.files.files > 0) {
                        vmd.files.files--;
                    }

                    if (vmd.files.files === 0 && vmd.currentState === 'issued') {
                        changeState('pending');
                    }
                }
            }

            function nextState() {
                changeState(fileConfig.states.nextState(vmd.currentState));
            }

            function hasFiles() {
                if (vmd.files.files > 0) {
                    return true;
                } else {
                    return false;
                }
            }

            function getNumberOfFiles() {
                return vmd.files.files;
            }
        }
    }
})((function currentScriptPath() {
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;
    return currentScriptPath;
})());

(function() {
    'use strict';

    angular.module("mandatory")
        .factory('modalWindow', modalWindow);

    modalWindow.$inject = ['$uibModal'];

    function modalWindow($uibModal) {
        return {
            open: open
        }

        function open(title,files,removeFile) {
            $uibModal.open({
                animation: true,
                template: ['<div class="modal-header">',
    '<h3 class="modal-title">{{vm.title}}</h3>',
'</div>',
'<div class="modal-body">',
    '<man-modal files="vm.files" delete="vm.delete()"></man-modal>',
'</div>',
'<div class="modal-footer">',
    '<button class="btn btn-default" type="button" ng-click="vm.cancel()">Close</button>',
'</div>'].join(''),
                controller: function($uibModalInstance) {
                    var vm = this;

                    vm.cancel = cancel;
                    vm.title = title;
                    vm.files = files;
                    vm.delete = removeFile;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                controllerAs: 'vm'
            });
        }
    }
})();

(function() {
    'use strict';

    angular.module("demo")
        .controller('ModalDemoController', ModalDemoController);

    ModalDemoController.$inject = ['mockFiles'];

    function ModalDemoController(mockFiles) {
        var vm = this;

        vm.files = mockFiles.mock(5);
        vm.test = function() {
            alert('deleting');
        };
    }
})();

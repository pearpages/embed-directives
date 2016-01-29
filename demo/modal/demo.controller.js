(function() {
    'use strict';

    angular.module("demo")
        .controller('ModalDemoController', ['mockFiles',ModalDemoController]);

    function ModalDemoController(mockFiles) {
        var vm = this;

        vm.files = mockFiles.mock(5);
        vm.test = function() {
        	alert('deleting');
        };
    }
})();

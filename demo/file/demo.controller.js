(function() {
    'use strict';

    angular.module("demo")
        .controller('FileDemoController', FileDemoController);

    function FileDemoController() {

        var vm = this;

        vm.files1 = [];
        vm.files2 = [];
        vm.files3 = [];
        vm.files4 = [];

    }
})();

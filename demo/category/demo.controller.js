(function() {
    'use strict';

    angular.module("demo")
        .controller('CategoryDemoController', CategoryDemoController);

    CategoryDemoController.$inject = ['mandatoryConfig'];

    function CategoryDemoController(mandatoryConfig) {
        var vm = this;

        vm.defaultvalues;
        vm.files;
        vm.showNice = showNice;

        activate();

        function activate() {

            vm.defaultvalues = mandatoryConfig.getConfig('KR','None');

            vm.files = {};
            for (var type in vm.defaultvalues) {
                vm.files[type] = {};
                for (var name in vm.defaultvalues[type]['data']) {
                    vm.files[type][name] = [];
                }
            }

        }

        function showNice(value) {
            return angular.toJson(value,true);
        }
    }
})();

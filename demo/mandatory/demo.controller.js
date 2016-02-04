(function() {
    'use strict';

    angular.module("demo")
        .controller('MandatoryDemoController', MandatoryDemoController);

    MandatoryDemoController.$inject = ['$stateParams', '$state', 'mandatoryConfig','Folder'];

    function MandatoryDemoController($stateParams, $state, mandatoryConfig, Folder) {
        var vm = this;

        vm.folder;
        vm.lob;
        vm.type;
        vm.click = click;
        vm.prettify = prettify;

        activate();

        function activate() {
            vm.folder = new Folder();
            vm.lob = $stateParams.lob;
            vm.type = $stateParams.type;
            vm.config = mandatoryConfig.getConfig(vm.lob, vm.type);
        }

        function prettify(value) {
            return angular.toJson(value, true);
        }

        function click() {
            $state.go('mandatory', {
                lob: vm.lob,
                type: vm.type
            }, {
                reload: true
            });
        }

    }
})();

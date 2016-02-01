(function() {
    'use strict';

    angular.module("demo")
        .controller('DropdownButtonDemoController', [DropdownButtonDemoController]);

    function DropdownButtonDemoController() {
        var vm = this;

        vm.current = 'pending';
        vm.options = {
            pending: new myModels.Button('pending', 'Pending', 'option-horizontal', 'red', 'na'),
            na: new myModels.Button('na', 'N/A', '', '', 'grey', 'expired'),
            issued: new myModels.Button('issued', 'Issued', 'ok', 'green', ''),
            expired: new myModels.Button('expired', 'Expired', 'time', 'blue', 'pending')
        };

    }
})();

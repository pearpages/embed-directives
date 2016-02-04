(function() {
    'use strict';

    angular.module("demo")
        .controller('DropdownButtonDemoController', DropdownButtonDemoController);

    DropdownButtonDemoController.$inject =  ['Button'];

    function DropdownButtonDemoController(Button) {
        var vm = this;

        vm.current = 'pending';
        vm.options = {
            pending: new Button('pending', 'Pending', 'option-horizontal', 'red', 'na'),
            na: new Button('na', 'N/A', '', '', 'grey', 'expired'),
            issued: new Button('issued', 'Issued', 'ok', 'green', ''),
            expired: new Button('expired', 'Expired', 'time', 'blue', 'pending')
        };

        vm.onMyChange = function (value) {
            vm.current = value;
        }
    }
})();

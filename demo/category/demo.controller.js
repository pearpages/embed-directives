(function() {
    'use strict';

    angular.module("demo")
        .controller('CategoryDemoController', [CategoryDemoController]);

    function CategoryDemoController() {
        var vm = this;

        vm.data = getDefaultValues('KR','None');

        function getDefaultValues(lob, type) {

            if (['KR', 'CGY', 'DISAB'].indexOf(lob) >= 0) {
                if (type === 'None') {
                    return new myModels.Matrix('pending', 'na', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'pending', 'pending', 'na', 'pending', 'na', 'pending', 'pending', 'na', 'na', 'na', 'na', 'na');
                } else if (type === 'Fac out') {
                    return new myModels.Matrix('pending', 'na', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'pending', 'pending', 'na', 'pending', 'na', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending');
                }
            } else if (lob === 'TRI') {
                return new myModels.Matrix('na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
            } else {
                if (type === 'None') {
                    return new myModels.Matrix('pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
                } else if (type === 'Fac out') {
                    return new myModels.Matrix('pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'pending', 'pending', 'pending', 'pending', 'pending');
                } else if (type === 'SME Facilities') {
                    return new myModels.Matrix('pending', 'na', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
                } else if (type === 'Local Policies') {
                    return new myModels.Matrix('pending', 'na', 'pending', 'na', 'pending', 'pending', 'na', 'na', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
                }
            }
        };
    }
})();

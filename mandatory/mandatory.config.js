(function() {
	'use strict';

	angular.module("mandatory")
	.provider('mandatoryConfig', mandatoryConfig);

    mandatoryConfig.$inject = ['Matrix'];

	function mandatoryConfig(Matrix) {

        this.getConfig = function(lob, type) {

            if (['KR', 'CGY', 'DISAB'].indexOf(lob) >= 0) {
                if (type === 'None') {
                    return new Matrix('pending', 'na', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'pending', 'pending', 'na', 'pending', 'na', 'pending', 'pending', 'na', 'na', 'na', 'na', 'na');
                } else if (type === 'Fac out') {
                    return new Matrix('pending', 'na', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'pending', 'pending', 'na', 'pending', 'na', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending');
                }
            } else if (lob === 'TRI') {
                return new Matrix('na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
            } else {
                if (type === 'None') {
                    return new Matrix('pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
                } else if (type === 'Fac out') {
                    return new Matrix('pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'pending', 'pending', 'pending', 'pending', 'pending');
                } else if (type === 'SME Facilities') {
                    return new Matrix('pending', 'na', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
                } else if (type === 'Local Policies') {
                    return new Matrix('pending', 'na', 'pending', 'na', 'pending', 'pending', 'na', 'na', 'pending', 'pending', 'pending', 'pending', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
                }
            }
        };

        this.$get = function() {
            return this;
        };

    }
})();
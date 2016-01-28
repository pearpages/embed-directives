(function() {
	'use strict';

	angular.module("mandatory")
	.provider('fileConfig',[fileConfig]);

	function fileConfig() {

        this.states = {
            pending: new myModels.Button('pending', 'Pending', 'option-horizontal', 'red'),
            na: new myModels.Button('na', 'N/A', '', '', 'grey'),
            issued: new myModels.Button('issued', 'Issued', 'ok', 'green'),
            expired: new myModels.Button('expired', 'Expired', 'time', 'blue'),
            nextState: function(state) {
                var res;
                if (state === 'pending') {
                    res = 'na';
                } else if (state === 'na') {
                    res = 'expired';
                } else if (state === 'expired') {
                    res = 'pending';
                }
                return res;
            }
        };

        this.setStates = function(buttons) {
            this.states = buttons;
        };

        this.$get = function() {
            return this;
        };

    }
})();
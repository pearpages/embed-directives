(function() {
	'use strict';

	angular.module("mandatory")
	.provider('fileConfig',fileConfig);

    fileConfig.$inject = ['Button'];

	function fileConfig(Button) {

        var states = {
            pending: new Button('pending', 'Pending', 'option-horizontal', 'red'),
            na: new Button('na', 'N/A', '', '', 'grey'),
            issued: new Button('issued', 'Issued', 'ok', 'green'),
            expired: new Button('expired', 'Expired', 'time', 'blue'),
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

        this.getStates = function () {
            return states;
        }

        this.setStates = function(buttons) {
            this.states = buttons;
        };

        this.$get = function() {
            return this;
        };

    }
})();
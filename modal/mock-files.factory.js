(function() {
	'use strict';

	angular.module("mandatory")
	.factory('mockFiles',[mockFiles]);

	function mockFiles() {
		
		return {
			mock: mock
		};

		function mock(howMany) {
			var res = [];
			while (howMany > 0) {
				var id = Math.round((Math.random() * 1000));
				res.push(new myModels.File(id,id+' Lorem ipsum dolor sit amet.'));
				howMany--;
			}
			return res;
		}
	}
})();
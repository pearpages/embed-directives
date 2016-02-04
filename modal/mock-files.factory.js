(function() {
	'use strict';

	angular.module("mandatory")
	.factory('mockFiles', mockFiles);

	mockFiles.$inject = ['File'];

	function mockFiles(File) {
		
		return {
			mock: mock
		};

		function mock(howMany) {
			var res = [];
			while (howMany > 0) {
				var id = Math.round((Math.random() * 1000));
				res.push(new File(id,id+' Lorem ipsum dolor sit amet.'));
				howMany--;
			}
			return res;
		}
	}
})();
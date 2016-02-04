(function() {
	'use strict';

	angular.module("demo")
	.controller('ModalWindowDemoController',ModalWindowDemoController);

	ModalWindowDemoController.$inject = ['modalWindow','mockFiles'];

	function ModalWindowDemoController(modalWindow,mockFiles) {

		var vm = this;

		vm.openWindow = function() {
			modalWindow.open(vm.title,mockFiles.mock(vm.number),function () {});
		};
	}
})();
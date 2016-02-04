(function() {
    'use strict';

    angular
        .module('demo')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<p>Just pick one of the links above.</p>'
            }).state('file', {
                url: '/file',
                templateUrl: '/demo/file/demo.html',
                controller: 'FileDemoController',
                controllerAs: 'vm'
            }).state('category', {
                url: '/category',
                templateUrl: '/demo/category/demo.html',
                controller: 'CategoryDemoController',
                controllerAs: 'vm'
            }).state('mandatory', {
                url: '/mandatory/:lob/:type',
                templateUrl: '/demo/mandatory/demo.html',
                controller: 'MandatoryDemoController',
                controllerAs: 'vm'
            }).state('modal', {
                url: '/modal',
                templateUrl: '/demo/modal/demo.html',
                controller: 'ModalDemoController',
                controllerAs: 'vm'
            }).state('dropdown-button', {
                url: '/dropdown-button',
                templateUrl: '/demo/dropdown-button/demo.html',
                controller: 'DropdownButtonDemoController',
                controllerAs: 'vm'
            }).state('modal-window', {
                url: '/modal-window',
                templateUrl: '/demo/modalWindow/demo.html',
                controller: 'ModalWindowDemoController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }

})();

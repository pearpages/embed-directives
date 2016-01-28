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
                template: '<p>Just pick one of the links above.</p>',
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
                url: '/mandatory',
                templateUrl: '/demo/mandatory/demo.html',
                controller: 'MandatoryDemoController',
                controllerAs: 'vm'
            }).state('modal', {
                url: '/modal',
                templateUrl: '/demo/modal/demo.html',
                controller: 'ModalDemoController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }

})();

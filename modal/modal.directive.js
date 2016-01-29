(function(currentScriptPath) {
    'use strict';

    angular.module("mandatory")
        .directive('manModal', ['mockFiles',manModal]);

    function manModal() {
        return {
            restrict: 'E',
            bindToController: true,
            controllerAs: 'vmd',
            controller: controller,
            scope: {
                title: '@',
                files: '=',
                delete: '&'
            },
            //link: link,
            templateUrl: currentScriptPath.replace('modal.directive.js', 'modal.html'),
        };

/*
        function link(scope, element, attrs, ngModel) {
           scope.$watch(function () {
                ngModel.config = ngModel.getConfig(ngModel.folder.lob,ngModel.folder.type);
           }, function(newValue) {
                // ...
           });
        }
*/
        function controller(mockFiles) {
            var vmd = this;

            vmd.toggle = toggle;
            vmd.deleteFile = deleteFile;
            vmd.deleteAll = deleteAll;

            activate();

            function activate() {
               // nothing
            }

            function deleteAll() {
                vmd.files.length = 0;
                vmd.delete();
            }
            
            function findFile(id,callback) {
                for (var i = vmd.files.length - 1; i >= 0; i--) {
                    var file = vmd.files[i];
                    if (file.id === id) {
                        callback(file,i);
                    }
                }
            }

            function deleteFile(id) {
                findFile(id,function(file,index) {
                    vmd.files.splice(index,1);
                    vmd.delete();
                });
            }

            function toggle(action,id,cancel) {
                findFile(id,function(file) {
                    if (action === 'view') {
                        if (cancel !== 'cancel') {
                            file.name = file.newValue;    
                        }
                        file.action = action;
                    } else if (action === 'edit') {
                        file.newValue = file.name;
                        file.action = action;
                    }    
                });
            }
        }
    }
})((function currentScriptPath() {
        var scripts = document.getElementsByTagName("script");
        var currentScriptPath = scripts[scripts.length - 1].src;
        return currentScriptPath;
    })());

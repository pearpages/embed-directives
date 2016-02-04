(function() {
    'use strict';

    angular.module("mandatory")
        .directive('manModal', manModal);

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
            template: ['<div>',
    '<h4>{{vmd.title}}</h4>',
    '<p>',
        '<button class="btn btn-danger btn-sm" ng-click="vmd.deleteAll()"><span class="glyphicon glyphicon-trash"></span> Delete All</button>',
    '</p>',
    '<table class="table table-striped table-bordered">',
        '<thead>',
            '<tr>',
                '<th>Name</th>',
                '<th>Delete</th>',
                '<th>Download</th>',
                '<th>Open</th>',
            '</tr>',
        '</thead>',
        '<tbody>',
            '<tr ng-repeat="file in vmd.files">',
                '<td>',
                    '<a ng-click="vmd.toggle(\'edit\',file.id)" ng-show="file.action === \'view\'" href="javascript:void(0)">',
                        '<span class="glyphicon glyphicon-pencil"></span>  {{file.name}}',
                    '</a>',
                    '<div ng-show="file.action === \'edit\'">',
                        '<input ng-model="file.newValue" />',
                        '<button ng-click="vmd.toggle(\'view\',file.id)">Save</button>',
                        '<button ng-click="vmd.toggle(\'view\',file.id,\'cancel\')">Cancel</button>',
                    '</div>',
                '</td>',
                '<td><a href="javascript:void(0)" ng-click="vmd.deleteFile(file.id)"><span class="glyphicon glyphicon-remove"></span> </a></td>',
                '<td><a href="javascript:void(0)"><span class="glyphicon glyphicon-download-alt"></span></a></td>',
                '<td><a href="javascript:void(0)"><span class="glyphicon glyphicon-folder-open"></span></a></td>',
            '</tr>',
            '<tr ng-show="vmd.files === null || vmd.files.length === 0">',
                '<td colspan="4">No files</td>',
            '</tr>',
        '</tbody>',
    '</table>',
'</div>'].join('')
        };

        function controller() {
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
})();

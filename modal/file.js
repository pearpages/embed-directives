(function() {
    'use strict';

    angular.module("mandatory")
        .value('File', function(id, name) {
            this.id = id;
            this.name = name;
            this.action = 'view';
            this.newValue = name;
        });

})();

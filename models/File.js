var myModels = myModels || {};

myModels.File = function(id, name) {
    this.id = id;
    this.name = name;
    this.action = 'view';
    this.newValue = name;
};

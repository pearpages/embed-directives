var myModels = myModels || {};

myModels.Button = function (id, description, icon, color, nextState) {
    this.id = id;
    this.description = description;
    this.icon = icon;
    this.color = color || '';
    this.nextState = nextState || '';
};

myModels.Button.prototype.getStyle = function() {
    if (this.color !== '') {
        return 'style="color:' + this.color + '"';
    } else {
        return '';
    }
};

myModels.Button.prototype.nextState = function() {
    return this.nextState;
};

myModels.Button.prototype.getClass = function() {
    return 'class="glyphicon glyphicon-' + this.icon + '"';
};

myModels.Button.prototype.render = function() {
    if (this.icon === '') {
        return '<span ' + this.getStyle() + ' style="font-size: 10px">' + this.description + '</span>';
    } else {
        return '<span ' + this.getClass() + ' ' + this.getStyle() + '></span>';
    }

};

(function(root, library) {
    if (typeof define === 'function' && define.amd) {
        define([], library);
    } else {
        root.matrix = library;
    }
})(this, function() {
    return {
        add: null,
        multiply: null,
        transpose: null,
        inverse: null,
        determinant: null
    };
}());
(function(root, library) {
    if (typeof define === 'function' && define.amd) {
        define([], library);
    } else {
        root.matrix = library;
    }
})(this, function() {
    /*
     * Custom Error "class" to be thrown on matrix.js
     * related errors.
     */
    function MatrixError(message) {
        this.name = 'MatrixError';
        this.message = message;
    }

    return {
        add: null,
        multiply: null,
        transpose: null,
        inverse: null,
        determinant: null,
        valid: null,
        MatrixError: MatrixError
    };
}());
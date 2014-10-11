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

    /*
     * Validates a given matrix, returning true if it is
     * valid or false otherwise.
     */
    function valid(matrix) {
        if (matrix instanceof Array) {
            for (var i = 0; i < matrix.length; i++) {
                if (matrix[i].length !== matrix.length) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    return {
        add: null,
        multiply: null,
        transpose: null,
        inverse: null,
        determinant: null,
        identity: null,
        valid: valid,
        MatrixError: MatrixError
    };
}());
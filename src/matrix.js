(function(root, library) {
    if (typeof define === 'function' && define.amd) {
        define([], library);
    } else {
        root.matrix = library();
    }
})(this, function() {
    /**
     *  Custom Error "class" to be thrown on matrix.js
     *  related errors.
     */
    function MatrixError(message) {
        this.name = 'MatrixError';
        this.message = message;
    }


    /**
     *  Accepts a matrix and returns the transpose of the
     *  given matrix.
     */
    function transpose(matrix) {
        if (valid(matrix)) {
            var result = [];
            for (var i = 0; matrix.length && i < matrix[0].length; i++) {
                result[i] = [];
                for (var j = 0; j < matrix.length; j++) {
                    result[i].push(matrix[j][i]);
                }
            }
            return result;
        }
        throw new MatrixError('Given matrix is invalid.');
    }


    /**
     *  Validates a given matrix, returning true if it is
     *  valid or false otherwise.
     */
    function valid(matrix) {
        if (matrix instanceof Array) {
            for (var i = 0; i < matrix.length - 1; i++) {
                if (matrix[i].length !== matrix[i + 1].length) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }


    /**
     *  Creates a ones matrix with the given dimensions.
     */
    function ones(rows, columns) {
        columns = columns || rows;
        if (typeof rows === 'number' && typeof columns === 'number') {
            var matrix = [];
            for (var i = 0; i < rows; i++) {
                matrix.push([]);
                for (var j = 0; j < columns; j++) {
                    matrix[i].push(1);
                }
            }
            return matrix;
        }
        throw new TypeError('Matrix dimensions should be integers.');
    }


    // Attach matrix methods to Array.prototype
    Array.prototype.valid = function() {
        return valid(this);
    };

    Array.prototype.transpose = function() {
        return transpose(this);
    };


    return {
        add: null,
        multiply: null,
        transpose: transpose,
        inverse: null,
        determinant: null,
        identity: null,
        valid: valid,
        ones: ones,
        zeros: null,
        MatrixError: MatrixError
    };
});

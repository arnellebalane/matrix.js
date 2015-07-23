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
     *  Performs matrix addition on given matrices.
     */
    function _matrixAddition(a, b) {
        var result = [];
        for (var i = 0; i < a.length; i++) {
            result.push([]);
            for (var j = 0; j < b.length; j++) {
                result[i].push(a[i][j] + b[i][j]);
            }
        }
        return result;
    }


    /**
     *  Performs scalar addition on the given matrix and scalar value.
     */
    function _scalarAddition(matrix, scalar) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result.push([]);
            for (var j = 0; j < matrix[i].length; j++) {
                result[i].push(matrix[i][j] + scalar);
            }
        }
        return result;
    }


    /**
     *  Performs matrix when given two matrices, or scalar addition when given
     *  a matrix and a scalar value.
     */
    function add(a, b) {
        if (a instanceof Array && b instanceof Array) {
            if (!valid(a) || !valid(b)) {
                throw new MatrixError('A given matrix is invalid.');
            } else if (a.length !== b.length || a[0].length !== b[0].length) {
                throw new MatrixError('Matrices are not of the same '
                    + 'dimensions.');
            }
            return _matrixAddition(a, b);
        } else if ((typeof a === 'number' && b instanceof Array)
                || (typeof b === 'number' && a instanceof Array)) {
            var matrix = a instanceof Array ? a : b;
            var scalar = a instanceof Array ? b : a;
            return _scalarAddition(matrix, scalar);
        }
        throw new MatrixError('No matrices given.');
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


    /**
     *  Creates a zeros matrix with the given dimensions.
     */
    function zeros(rows, columns) {
        columns = columns || rows;
        if (typeof rows === 'number' && typeof columns === 'number') {
            var matrix = [];
            for (var i = 0; i < rows; i++) {
                matrix.push([]);
                for (var j = 0; j < columns; j++) {
                    matrix[i].push(0);
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
        add: add,
        multiply: null,
        transpose: transpose,
        inverse: null,
        determinant: null,
        identity: null,
        valid: valid,
        ones: ones,
        zeros: zeros,
        MatrixError: MatrixError
    };
});

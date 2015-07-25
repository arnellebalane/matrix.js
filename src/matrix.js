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
     *  Returns the requested row of the given matrix.
     */
    function _getRow(matrix, index) {
        if (index < matrix.length) {
            return matrix[index];
        }
        throw new MatrixError('Row index out of bounds.');

    }


    /**
     *  Returns the requested column of the given matrix.
     */
    function _getColumn(matrix, index) {
        if (index < matrix[0].length) {
            var column = [];
            for (var i = 0; i < matrix.length; i++) {
                column.push(matrix[i][index]);
            }
            return column;
        }
        throw new MatrixError('Column index out of bounds.');
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
     *  Performs matrix multiplication on given matrices.
     */
    function _matrixMultiplication(a, b) {
        var result = [];
        for (var i = 0; i < a.length && i < b.length; i++) {
            result.push([]);
            var row = _getRow(a, i);
            for (var j = 0; j < a[0].length && j < b[0].length; j++) {
                var column = _getColumn(b, j);
                result[i][j] = 0;
                for (var k = 0; k < row.length; k++) {
                    result[i][j] += row[k] * column[k];
                }
            }
        }
        return result;
    }


    /**
     *  Performs scalar multiplication on the given matrix and scalar value.
     */
    function _scalarMultiplication(matrix, scalar) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result.push([]);
            for (var j = 0; j < matrix[i].length; j++) {
                result[i].push(matrix[i][j] * scalar);
            }
        }
        return result;
    }


    /**
     *  Performs matrix multiplication when given two matrices, or scalar
     *  multiplication when given a matrix and a scalar value.
     */
    function multiply(a, b) {
        if (a instanceof Array && b instanceof Array) {
            if (!valid(a) || !valid(b)) {
                throw new MatrixError('A given matrix is invalid.');
            } else if (dimensions(a).columns !== dimensions(b).rows) {
                throw new MatrixError('Given matrices are incompatible.');
            }
            return _matrixMultiplication(a, b);
        } else if ((typeof a === 'number' && b instanceof Array)
                || (typeof b === 'number' && a instanceof Array)) {
            var matrix = a instanceof Array ? a : b;
            var scalar = a instanceof Array ? b : a;
            if (!valid(matrix)) {
                throw new MatrixError('A given matrix is invalid.');
            }
            return _scalarMultiplication(matrix, scalar);
        }
        throw new MatrixError('No matrices given.');
    }


    /**
     *  Creates an identity matrix with the given size.
     */
    function identity(size) {
        if (size !== undefined && size >= 0) {
            var matrix = [];
            for (var i = 0; i < size; i++) {
                matrix.push([]);
                for (var j = 0; j < size; j++) {
                    matrix[i][j] = i === j ? 1 : 0;
                }
            }
            return matrix;
        }
        throw new MatrixError('Invalid matrix dimensions given.');
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
     *  Returns the dimensions (rows and columns) of the given matrix.
     */
    function dimensions(matrix) {
        if (valid(matrix)) {
            return {
                rows: matrix.length,
                columns: matrix.length ? matrix[0].length : 0
            };
        }
        throw new MatrixError('Given matrix is invalid.');
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
    Array.prototype.add = function(value) {
        return add(this, value);
    };

    Array.prototype.identity = function() {
        return identity(this);
    };

    Array.prototype.valid = function() {
        return valid(this);
    };

    Array.prototype.dimensions = function() {
        return dimensions(this);
    };

    Array.prototype.transpose = function() {
        return transpose(this);
    };


    return {
        add: add,
        multiply: multiply,
        transpose: transpose,
        inverse: null,
        determinant: null,
        identity: identity,
        valid: valid,
        dimensions: dimensions,
        ones: ones,
        zeros: zeros,
        MatrixError: MatrixError
    };
});

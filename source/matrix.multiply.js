import { MatrixError } from './matrix';
import dimensions from './matrix.dimensions';
import valid from './matrix.valid';


function _getRow(matrix, index) {
    return matrix[index];
}



function _getColumn(matrix, index) {
    const column = [];
    for (let i = 0; i < matrix.length; i++) {
        column.push(matrix[i][index]);
    }
    return column;
}


function _matrixMultiplication(a, b) {
    const result = [];
    for (let i = 0; i < a.length && i < b.length; i++) {
        result.push([]);
        const row = _getRow(a, i);
        for (let j = 0; j < a[0].length && j < b[0].length; j++) {
            const column = _getColumn(b, j);
            result[i][j] = 0;
            for (let k = 0; k < row.length; k++) {
                result[i][j] += row[k] * column[k];
            }
        }
    }
    return result;
}


function _scalarMultiplication(matrix, scalar) {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            result[i].push(matrix[i][j] * scalar);
        }
    }
    return result;
}


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
        const matrix = a instanceof Array ? a : b;
        const scalar = a instanceof Array ? b : a;
        if (!valid(matrix)) {
            throw new MatrixError('A given matrix is invalid.');
        }
        return _scalarMultiplication(matrix, scalar);
    }
    throw new MatrixError('No matrices given.');
}


/* eslint no-extend-native: "off" */
Array.prototype.multiply = function matrixMultiple(value) {
    return multiply(this, value);
};


module.exports = multiply;

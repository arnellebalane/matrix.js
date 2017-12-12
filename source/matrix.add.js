import { MatrixError } from './matrix';
import valid from './matrix.valid';


function matrixAddition(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result.push([]);
        for (let j = 0; j < b.length; j++) {
            result[i].push(a[i][j] + b[i][j]);
        }
    }
    return result;
}


function scalarAddition(matrix, scalar) {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            result[i].push(matrix[i][j] + scalar);
        }
    }
    return result;
}


function add(a, b) {
    if (a instanceof Array && b instanceof Array) {
        if (!valid(a) || !valid(b)) {
            throw new MatrixError('A given matrix is invalid.');
        } else if (a.length !== b.length || a[0].length !== b[0].length) {
            throw new MatrixError('Matrices are not of the same '
                + 'dimensions.');
        }
        return matrixAddition(a, b);
    } else if ((typeof a === 'number' && b instanceof Array)
    || (typeof b === 'number' && a instanceof Array)) {
        const matrix = a instanceof Array ? a : b;
        const scalar = a instanceof Array ? b : a;
        if (!valid(matrix)) {
            throw new MatrixError('A given matrix is invalid.');
        }
        return scalarAddition(matrix, scalar);
    }
    throw new MatrixError('No matrices given.');
}


/* eslint no-extend-native: "off" */
Array.prototype.add = function matrixAdd(value) {
    return add(this, value);
};


module.exports = add;

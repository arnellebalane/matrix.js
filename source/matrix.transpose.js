import { MatrixError } from './matrix';
import valid from './matrix.valid';


function transpose(matrix) {
    if (valid(matrix)) {
        const result = [];
        for (let i = 0; matrix.length && i < matrix[0].length; i++) {
            result[i] = [];
            for (let j = 0; j < matrix.length; j++) {
                result[i].push(matrix[j][i]);
            }
        }
        return result;
    }
    throw new MatrixError('Given matrix is invalid.');
}


/* eslint no-extend-native: "off" */
Array.prototype.transpose = function matrixTranspose() {
    return transpose(this);
};


module.exports = transpose;

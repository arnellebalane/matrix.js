import { MatrixError } from './matrix';
import valid from './matrix.valid';


function dimensions(matrix) {
    if (valid(matrix)) {
        return {
            rows: matrix.length,
            columns: matrix.length ? matrix[0].length : 0
        };
    }
    throw new MatrixError('Given matrix is invalid.');
}


/* eslint no-extend-native: "off" */
Array.prototype.dimensions = function matrixDimensions() {
    return dimensions(this);
};


module.exports = dimensions;

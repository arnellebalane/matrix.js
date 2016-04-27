import { MatrixError } from './matrix';


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


/* eslint no-extend-native: "off" */
Array.prototype.identity = function matrixIdentity() {
    return identity(this);
};


module.exports = identity;

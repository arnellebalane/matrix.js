import { MatrixError } from './matrix';
import valid from './matrix.valid';


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


Array.prototype.transpose = function() {
    return transpose(this);
};


module.exports = transpose;

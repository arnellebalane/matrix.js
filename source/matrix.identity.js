import { MatrixError } from './matrix';


function identity(size) {
    if (size !== undefined && size >= 0) {
        const matrix = [];
        for (let i = 0; i < size; i++) {
            matrix.push([]);
            for (let j = 0; j < size; j++) {
                matrix[i][j] = i === j ? 1 : 0;
            }
        }
        return matrix;
    }
    throw new MatrixError('Invalid matrix dimensions given.');
}


module.exports = identity;

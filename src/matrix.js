import add from './matrix.add';
import dimensions from './matrix.dimensions';
import identity from './matrix.identity';
import multiply from './matrix.multiply';
import ones from './matrix.ones';
import transpose from './matrix.transpose';
import valid from './matrix.valid';
import zeros from './matrix.zeros';


function MatrixError(message) {
    this.name = 'MatrixError';
    this.message = message;
}


exports.add = add;
exports.dimensions = dimensions;
exports.identity = identity;
exports.multiply = multiply;
exports.ones = ones;
exports.transpose = transpose;
exports.valid = valid;
exports.zeros = zeros;
exports.MatrixError = MatrixError;

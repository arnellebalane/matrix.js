function MatrixError(message) {
    this.name = 'MatrixError';
    this.message = message;
}


exports.add = require('./matrix.add');
exports.dimensions = require('./matrix.dimensions');
exports.identity = require('./matrix.identity');
exports.multiply = require('./matrix.multiply');
exports.ones = require('./matrix.ones');
exports.transpose = require('./matrix.transpose');
exports.valid = require('./matrix.valid');
exports.zeros = require('./matrix.zeros');
exports.MatrixError = MatrixError;

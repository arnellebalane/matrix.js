// var matrix = require('../src/matrix').matrix;
// var assert = require('assert');

// describe('matrix.identity', function() {
//     it('should return an empty matrix when given zero for its dimensions', function() {
//         var expected = [];
//         var actual = matrix.identity(0);
//         assert.deepEqual(expected, actual);
//     });

//     it('should return an n-by-n identity matrix when given a positive integer n for its dimensions', function() {
//         var expected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
//         var actual = matrix.identity(3);
//         assert.deepEqual(expected, actual);
//     });

//     it('should throw MatrixError when given a negative integer for its dimensions', function() {
//         assert.throws(function() {
//             matrix.identity(-3);
//         }, matrix.MatrixError, 'Invalid matrix dimensions given.');
//     });

//     it('should throw MatrixError when not given an integer for its dimensions', function() {
//         assert.throws(function() {
//             matrix.identity('a');
//         }, matrix.MatrixError, 'Invalid matrix dimensions given.');
//     });

//     it('should be integrated to Array.prototype', function() {
//         var expected = true;
//         var actual = Array.prototype.hasOwnProperty('identity');
//         assert.equal(expected, actual);
//     });
// });

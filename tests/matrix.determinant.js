// var matrix = require('../src/matrix').matrix;
// var assert = require('assert');

// describe('matrix.determinant', function() {
//     it('should return the only element in the matrix when given an 1x1 '
//         + 'matrix', function() {
//         var a = [[1]];
//         var expected = 1;
//         var actual = matrix.determinant(a);
//         assert.equal(expected, actual);
//     });

//     it('should return the determinant of a 2x2 matrix', function() {
//         var a = [[1, 2], [3, 4]];
//         var expected = -2;
//         var actual = matrix.determinant(a);
//         assert.equal(expected, actual);
//     });

//     it('should return the determinant of a 3x3 matrix', function() {
//         var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//         var expected = 0;
//         var actual = matrix.determinant(a);
//         assert.equal(expected, actual);
//     });

//     it('should return the determinant of a 4- or higher-dimensional '
//         + 'matrix', function() {
//         var a = [[1, 4, 3, 5], [3, 2, 6, 4], [5, 6, 6, 3], [3, 7, 8, 3]];
//         var expected = -345;
//         var actual = matrix.determinant(a);
//         assert.equal(expected, actual);
//     });

//     it('should throw MatrixError when not given a square matrix',
//         function() {
//         var a = [[1, 2, 3], [4, 5, 6]];
//         assert.throws(function() {
//             matrix.determinant(a);
//         }, matrix.MatrixError, 'Non-square matrix given.');
//     });

//     it('should throw MatrixError when not given a matrix', function() {
//         var a = 12;
//         assert.throws(function() {
//             matrix.determinant(a);
//         }, matrix.MatrixError, 'No matrix given.');
//     });

//     it('should be integrated to Array.prototype', function() {
//         var expected = true;
//         var actual = Array.prototype.hasOwnProperty('determinant');
//         assert.equal(expected, actual);
//     });

//     it('should calculate the determinant of a valid matrix through the '
//         + 'Array.prototype property', function() {
//         var a = [[1]];
//         var expected = 1;
//         var actual = a.determinant();
//         assert.equal(expected, actual);
//     });
// });

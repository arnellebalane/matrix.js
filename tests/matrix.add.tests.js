var matrix = require('../src/matrix').matrix;
var assert = require('assert');

describe('matrix.add', function() {
    it('should perform matrix addition when given two matrices with the same dimensions', function() {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        var expected = [[10, 10, 10], [10, 10, 10], [10, 10, 10]];
        var actual = matrix.add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given two matrices with different dimensions', function() {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[1, 2], [3, 4], [5, 6]];
        assert.throws(function() {
            matrix.add(a, b);
        }, matrix.MatrixError, 'Matrices do not have the same dimensions.');
    });

    it('should perform scalar addition when given a matrix and a scalar value', function() {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = 2;
        var expected = [[3, 4, 5], [6, 7, 8], [9, 10, 11]];
        var actual = matrix.add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should perform scalar addition when given a scalar value and a matrix', function() {
        var a = 2;
        var b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = [[3, 4, 5], [6, 7, 8], [9, 10, 11]];
        var actual = matrix.add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', function() {
        var a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        assert.throws(function() {
            matrix.add(a, b);
        }, matrix.MatrixError, 'A given matrix is invalid.');
    });

    it('should throw MatrixError when not given any matrices', function() {
        var a = 2;
        var b = 3;
        assert.throws(function() {
            matrix.add(a, b);
        }, matrix.MatrixError, 'No matrices given.');
    });
});
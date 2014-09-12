var matrix = require('../src/matrix').matrix;
var assert = require('assert');

describe('matrix.transpose', function() {
    it('should transpose an empty matrix', function() {
        var a = [];
        var expected = [];
        var actual = matrix.transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose a non-empty square matrix', function() {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
        var actual = matrix.transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose a non-empty non-square matrix', function() {
        var a = [[1, 2, 3], [4, 5, 6]];
        var expected = [[1, 4], [2, 5], [3, 6]];
        var actual = matrix.transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', function() {
        var a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        assert.throws(function() {
            matrix.transpose(a);
        }, matrix.MatrixError, 'Given matrix is invalid.');
    });

    it('should throw MatrixError when not given a matrix', function() {
        var a = 12;
        assert.throws(function() {
            matrix.transpose(a);
        }, matrix.MatrixError, 'No matrix given.');
    });
});
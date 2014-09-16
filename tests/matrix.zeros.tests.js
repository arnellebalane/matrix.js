var matrix = require('../src/matrix').matrix;
var assert = require('assert');

describe('matrix.zeros', function() {
    it('should return a square zero matrix when given one positive integer as its dimension', function() {
        var expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        var actual = matrix.zeros(3);
        assert.deepEqual(expected, actual);
    });

    it('should return a m-by-n zero matrix when given two positive integers as its dimensions', function() {
        var expected = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
        var actual = matrix.zeros(3, 5);
        assert.deepEqual(expected, actual);
    });

    it('should return an empty matrix when at least one of the dimension arguments is zero', function() {
        var expected = [];
        var actual = matrix.zeros(0, 3);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when at least one of the dimension arguments is negative', function() {
        assert.throws(function() {
            matrix.zeros(-3, 3);
        }, matrix.MatrixError, 'Dimensions must be positive integers.');
    });

    it('should throw MatrixError when given non-integer arguments', function() {
        assert.throws(function() {
            matrix.zeros('a', 3);
        }, matrix.MatrixError, 'Dimensions must be positive integers.');
    });
});
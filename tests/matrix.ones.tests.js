var matrix = require('../src/matrix').matrix;
var assert = require('assert');

describe('matrix.ones', function() {
    it('should return a square ones matrix when given one positive integer as its dimension', function() {
        var expected = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
        var actual = matrix.ones(3);
        assert.deepEqual(expected, actual);
    });

    it('should return a m-by-n ones matrix when given two positive integers as its dimensions', function() {
        var expected = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
        var actual = matrix.ones(3, 5);
        assert.deepEqual(expected, actual);
    });

    it('should return an empty matrix when at least one of the dimension arguments is zero', function() {
        var expected = [];
        var actual = matrix.ones(0, 3);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when at least one of the dimension arguments is negative', function() {
        assert.throws(function() {
            matrix.ones(-3, 3);
        }, matrix.MatrixError, 'Dimensions must be positive integers.');
    });

    it('should throw MatrixError when given non-integer arguments', function() {
        assert.throws(function() {
            matrix.ones('a', 3);
        }, matrix.MatrixError, 'Dimensions must be positive integers.');
    });
});
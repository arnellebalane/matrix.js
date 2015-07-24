var matrix = require('../src/matrix').matrix;
var assert = require('assert');


describe('matrix.dimensions', function() {
    it('should return the dimensions of an empty matrix', function() {
        var a = [];
        var expected = { rows: 0, columns: 0 };
        var actual = matrix.dimensions(a);
        assert.deepEqual(expected, actual);
    });

    it('should return the dimensions of a valid matrix', function() {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = { rows: 3, columns: 3 };
        var actual = matrix.dimensions(a);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', function() {
        var a = [[1, 2, 3], [4, 5], [6, 7, 8]];
        assert.throws(function() {
            matrix.dimensions(a);
        }, matrix.MatrixError, 'Given matrix is invalid.');
    });

    it('should be integated to Array.prototype', function() {
        var expected = true;
        var actual = Array.prototype.hasOwnProperty('dimensions');
        assert.equal(expected, actual);
    });
});

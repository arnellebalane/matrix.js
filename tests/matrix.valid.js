var matrix = require('../src/matrix').matrix;
var assert = require('assert');

describe('matrix.valid', function() {
    it('should return true when given an empty matrix', function() {
        var a = [];
        var expected = true;
        var actual = matrix.valid(a);
        assert.equal(expected, actual);
    });

    it('should return true when given a valid matrix', function() {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = true;
        var actual = matrix.valid(a);
        assert.equal(expected, actual);
    });

    it('should return false when given an invalid matrix', function() {
        var a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        var expected = false;
        var actual = matrix.valid(a);
        assert.equal(expected, actual);
    });

    it('should return false when not given a matrix', function() {
        var a = 12;
        var expected = false;
        var actual = matrix.valid(a);
        assert.equal(expected, actual);
    });

    it('should be integrated to Array.prototype', function() {
        var expected = true;
        var actual = Array.prototype.hasOwnProperty('valid');
        assert.equal(expected, actual);
    });

    it('should validate a matrix through the Array.prototype property', function() {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = true;
        var actual = a.valid();
        assert.equal(expected, actual);
    });
});
var matrix = require('../src/matrix').matrix;
var assert = require('assert');


describe('matrix.zeros', function() {
    it('should return a square matrix when given only one argument',
        function() {
            var expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
            var actual = matrix.zeros(3);
            assert.deepEqual(expected, actual);
        }
    );

    it('should return a matrix of correct dimensions when given two arguments',
        function() {
            var expected = [[0, 0], [0, 0], [0, 0]];
            var actual = matrix.zeros(3, 2);
            assert.deepEqual(expected, actual);
        }
    );

    it('should throw TypeError when not given any arguments',
        function() {
            assert.throws(function() {
                matrix.zeros();
            }, TypeError, 'Matrix dimensions should be integers.');
        }
    );

    it('should throw TypeError when any given argument is not a number',
        function() {
            assert.throws(function() {
                matrix.zeros('string');
            }, TypeError, 'Matrix dimensions should be integers.');
            assert.throws(function() {
                matrix.zeros(3, 'string');
            }, TypeError, 'Matrix dimensions should be integers.');
        }
    );
});

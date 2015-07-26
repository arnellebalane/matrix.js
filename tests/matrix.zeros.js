import { zeros, MatrixError } from '../src/matrix';
import assert from 'assert';


describe('matrix.zeros', () => {
    it('should return a square matrix when given only one argument', () => {
        var expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        var actual = zeros(3);
        assert.deepEqual(expected, actual);
    });

    it('should return a matrix of correct dimensions when given two arguments',
        () => {
            var expected = [[0, 0], [0, 0], [0, 0]];
            var actual = zeros(3, 2);
            assert.deepEqual(expected, actual);
        }
    );

    it('should throw TypeError when not given any arguments', () => {
        assert.throws(() => zeros(), TypeError,
            'Matrix dimensions should be integers.');
    });

    it('should throw TypeError when any given argument is not a number',
        () => {
            assert.throws(() => zeros('string'), TypeError,
                'Matrix dimensions should be integers.');
            assert.throws(() => zeros(3, 'string'), TypeError,
                'Matrix dimensions should be integers.');
        }
    );
});

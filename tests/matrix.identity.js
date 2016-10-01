import { identity, MatrixError } from '../source/matrix';
import assert from 'assert';


describe('matrix.identity', () => {
    it('should return an empty matrix when given zero for its dimensions',
    () => {
        var expected = [];
        var actual = identity(0);
        assert.deepEqual(expected, actual);
    });

    it('should return an n-by-n identity matrix when given a positive integer '
    + 'n for its dimensions', () => {
        var expected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        var actual = identity(3);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given a negative integer for its '
    + 'dimensions', () => {
        assert.throws(() => identity(-3), MatrixError,
            'Invalid matrix dimensions given.');
    });

    it('should throw MatrixError when not given an integer for its dimensions',
    () => {
        assert.throws(() => identity('a'), MatrixError,
            'Invalid matrix dimensions given.');
    });

    it('should be integrated to Array.prototype', () => {
        var expected = true;
        var actual = Array.prototype.hasOwnProperty('identity');
        assert.equal(expected, actual);
    });
});

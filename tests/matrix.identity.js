import { identity, MatrixError } from '../source/matrix';
import assert from 'assert';


describe('matrix.identity', () => {
    it('should return an empty matrix when given zero for its dimensions', () => {
        const expected = [];
        const actual = identity(0);
        assert.deepEqual(expected, actual);
    });

    it('should return an n-by-n identity matrix when given a positive integer n for its dimensions', () => {
        const expected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        const actual = identity(3);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given a negative integer for its dimensions', () => {
        assert.throws(() => identity(-3), MatrixError, 'Invalid matrix dimensions given.');
    });

    it('should throw MatrixError when not given an integer for its dimensions', () => {
        assert.throws(() => identity('a'), MatrixError, 'Invalid matrix dimensions given.');
    });
});

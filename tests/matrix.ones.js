import { ones } from '../source/matrix';
import assert from 'assert';


describe('matrix.ones', () => {
    it('should return a square matrix when given only one argument', () => {
        var expected = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
        var actual = ones(3);
        assert.deepEqual(expected, actual);
    });

    it('should return a matrix of correct dimensions when given two arguments',
    () => {
        var expected = [[1, 1], [1, 1], [1, 1]];
        var actual = ones(3, 2);
        assert.deepEqual(expected, actual);
    });

    it('should throw TypeError when not given any arguments', () => {
        assert.throws(() => ones(), TypeError,
            'Matrix dimensions should be integers.');
    });

    it('should throw TypeError when any given argument is not a number',
    () => {
        assert.throws(() => ones('string'), TypeError,
            'Matrix dimensions should be integers.');
        assert.throws(() => ones(3, 'string'), TypeError,
            'Matrix dimensions should be integers.');
    });
});

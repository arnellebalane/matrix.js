import { dimensions, MatrixError } from '../source/matrix';
import assert from 'assert';


describe('matrix.dimensions', () => {
    it('should return the dimensions of an empty matrix', () => {
        const a = [];
        const expected = { rows: 0, columns: 0 };
        const actual = dimensions(a);
        assert.deepEqual(expected, actual);
    });

    it('should return the dimensions of a valid matrix', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = { rows: 3, columns: 3 };
        const actual = dimensions(a);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', () => {
        const a = [[1, 2, 3], [4, 5], [6, 7, 8]];
        assert.throws(() => dimensions(a), MatrixError,
            'Given matrix is invalid.');
    });

    it('should be integated to Array.prototype', () => {
        const expected = true;
        const actual = Array.prototype.hasOwnProperty('dimensions');
        assert.equal(expected, actual);
    });

    it('should return matrix dimensions through the Array.prototype '
    + 'property', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = { rows: 3, columns: 3 };
        const actual = a.dimensions();
        assert.deepEqual(expected, actual);
    });
});

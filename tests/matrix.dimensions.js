import { dimensions, MatrixError } from '../src/matrix';
import assert from 'assert';


describe('matrix.dimensions', () => {
    it('should return the dimensions of an empty matrix', () => {
        var a = [];
        var expected = { rows: 0, columns: 0 };
        var actual = dimensions(a);
        assert.deepEqual(expected, actual);
    });

    it('should return the dimensions of a valid matrix', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = { rows: 3, columns: 3 };
        var actual = dimensions(a);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', () => {
        var a = [[1, 2, 3], [4, 5], [6, 7, 8]];
        assert.throws(() => {
            dimensions(a);
        }, MatrixError, 'Given matrix is invalid.');
    });

    it('should be integated to Array.prototype', () => {
        var expected = true;
        var actual = Array.prototype.hasOwnProperty('dimensions');
        assert.equal(expected, actual);
    });
});

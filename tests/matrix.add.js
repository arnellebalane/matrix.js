import { add, MatrixError } from '../source/matrix';
import assert from 'assert';


describe('matrix.add', () => {
    it('should perform matrix addition when given two matrices with the '
    + 'same dimensions', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expected = [[10, 10, 10], [10, 10, 10], [10, 10, 10]];
        const actual = add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given two matrices with different '
    + 'dimensions', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = [[1, 2], [3, 4], [5, 6]];
        assert.throws(() => add(a, b), MatrixError,
            'Matrices are not of the same dimensions.');
    });

    it('should perform scalar addition when given a matrix and a scalar '
    + 'value', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = 2;
        const expected = [[3, 4, 5], [6, 7, 8], [9, 10, 11]];
        const actual = add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should perform scalar addition when given a scalar value and a '
    + 'matrix', () => {
        const a = 2;
        const b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = [[3, 4, 5], [6, 7, 8], [9, 10, 11]];
        const actual = add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', () => {
        const a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        let b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        assert.throws(() => add(a, b), MatrixError,
            'A given matrix is invalid.');

        b = 3;
        assert.throws(() => add(a, b), MatrixError,
            'A given matrix is invalid.');
    });

    it('should throw MatrixError when not given any matrices', () => {
        const a = 2;
        const b = 3;
        assert.throws(() => add(a, b), MatrixError, 'No matrices given.');
    });

    it('should be integrated to Array.prototype', () => {
        const expected = true;
        const actual = Array.prototype.hasOwnProperty('add');
        assert.equal(expected, actual);
    });

    it('should add valid matrices through the Array.prototype '
    + 'property', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expected = [[10, 10, 10], [10, 10, 10], [10, 10, 10]];
        const actual = a.add(b);
        assert.deepEqual(expected, actual);
    });
});

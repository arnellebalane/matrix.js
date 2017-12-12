import { multiply, MatrixError } from '../source/matrix';
import assert from 'assert';

describe('matrix.multiply', () => {
    it('should perform matrix multiplication when given two matrices with the same dimensions', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expected = [[30, 24, 18], [84, 69, 54], [138, 114, 90]];
        const actual = multiply(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should perform matrix multiplication when given a-by-n and n-by-b matrices', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = [[1, 2], [3, 4], [5, 6]];
        const expected = [[22, 28], [49, 64], [76, 100]];
        const actual = multiply(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given a-by-n and m-by-b matrices', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = [[1, 2, 3], [4, 5, 6]];
        assert.throws(() => multiply(a, b), MatrixError, 'Given matrices are incompatible.');
    });

    it('should perform scalar multiplication when given a matrix and a scalar value', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = 2;
        const expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
        const actual = multiply(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should perform scalar multiplication when given a scalar value and a matrix', () => {
        const a = 2;
        const b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
        const actual = multiply(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', () => {
        const a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        let b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        assert.throws(() => multiply(a, b), MatrixError, 'A given matrix is invalid.');

        b = 3;
        assert.throws(() => multiply(a, b), MatrixError, 'A given matrix is invalid.');
    });

    it('should throw MatrixError when not given any matrices', () => {
        const a = 2;
        const b = 3;
        assert.throws(() => multiply(a, b), MatrixError, 'No matrices given.');
    });

    it('should be integrated to Array.prototype', () => {
        const expected = true;
        const actual = Array.prototype.hasOwnProperty('multiply');
        assert.equal(expected, actual);
    });

    it('should multiply valid matrices through the Array.prototype property', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expected = [[30, 24, 18], [84, 69, 54], [138, 114, 90]];
        const actual = a.multiply(b);
        assert.deepEqual(expected, actual);
    });
});

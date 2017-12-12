import { multiply, MatrixError } from '../source/matrix';
import assert from 'assert';

describe('matrix.multiply', () => {
    it('should perform matrix multiplication when given two matrices with '
    + 'the same dimensions', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        var expected = [[30, 24, 18], [84, 69, 54], [138, 114, 90]];
        var actual = multiply(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should perform matrix multiplication when given a-by-n and n-by-b '
    + 'matrices', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[1, 2], [3, 4], [5, 6]];
        var expected = [[22, 28], [49, 64], [76, 100]];
        var actual = multiply(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given a-by-n and m-by-b matrices',
    () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[1, 2, 3], [4, 5, 6]];
        assert.throws(() => multiply(a, b), MatrixError,
            'Given matrices are incompatible.');
    });

    it('should perform scalar multiplication when given a matrix and a '
    + 'scalar value', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = 2;
        var expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
        var actual = multiply(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should perform scalar multiplication when given a scalar value and '
    + 'a matrix', () => {
        var a = 2;
        var b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
        var actual = multiply(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', () => {
        var a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        assert.throws(() => multiply(a, b), MatrixError,
            'A given matrix is invalid.');

        var b = 3;
        assert.throws(() => multiply(a, b), MatrixError,
            'A given matrix is invalid.');
    });

    it('should throw MatrixError when not given any matrices', () => {
        var a = 2;
        var b = 3;
        assert.throws(() => multiply(a, b), MatrixError, 'No matrices given.');
    });

    it('should be integrated to Array.prototype', () => {
        var expected = true;
        var actual = Array.prototype.hasOwnProperty('multiply');
        assert.equal(expected, actual);
    });

    it('should multiply valid matrices through the Array.prototype property',
    () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        var expected = [[30, 24, 18], [84, 69, 54], [138, 114, 90]];
        var actual = a.multiply(b);
        assert.deepEqual(expected, actual);
    });
});

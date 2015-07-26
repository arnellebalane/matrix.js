import { add, MatrixError } from '../src/matrix';
import assert from 'assert';


describe('matrix.add', () => {
    it('should perform matrix addition when given two matrices with the '
        + 'same dimensions', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        var expected = [[10, 10, 10], [10, 10, 10], [10, 10, 10]];
        var actual = add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given two matrices with different '
        + 'dimensions', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[1, 2], [3, 4], [5, 6]];
        assert.throws(() => {
            add(a, b);
        }, MatrixError, 'Matrices are not of the same dimensions.');
    });

    it('should perform scalar addition when given a matrix and a scalar '
        + 'value', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = 2;
        var expected = [[3, 4, 5], [6, 7, 8], [9, 10, 11]];
        var actual = add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should perform scalar addition when given a scalar value and a '
        + 'matrix', () => {
        var a = 2;
        var b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = [[3, 4, 5], [6, 7, 8], [9, 10, 11]];
        var actual = add(a, b);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', () => {
        var a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        assert.throws(() => {
            add(a, b);
        }, MatrixError, 'A given matrix is invalid.');
    });

    it('should throw MatrixError when not given any matrices', () => {
        var a = 2;
        var b = 3;
        assert.throws(() => {
            add(a, b);
        }, MatrixError, 'No matrices given.');
    });

    it('should be integrated to Array.prototype', () => {
        var expected = true;
        var actual = Array.prototype.hasOwnProperty('add');
        assert.equal(expected, actual);
    });

    it('should add valid matrices through the Array.prototype '
        + 'property', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        var expected = [[10, 10, 10], [10, 10, 10], [10, 10, 10]];
        var actual = a.add(b);
        assert.deepEqual(expected, actual);
    });
});

import { transpose, MatrixError } from '../source/matrix';
import assert from 'assert';


describe('matrix.transpose', () => {
    it('should transpose an empty matrix', () => {
        var a = [];
        var expected = [];
        var actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose a non-empty square matrix', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
        var actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose a non-empty non-square matrix', () => {
        var a = [[1, 2, 3], [4, 5, 6]];
        var expected = [[1, 4], [2, 5], [3, 6]];
        var actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose a 1-by-n matrix', () => {
        var a = [[1, 2, 3, 4, 5]];
        var expected = [[1], [2], [3], [4], [5]];
        var actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose an n-by-1 matrix', () => {
        var a = [[1], [2], [3], [4], [5]];
        var expected = [[1, 2, 3, 4, 5]];
        var actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', () => {
        var a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        assert.throws(() => transpose(a), MatrixError,
            'Given matrix is invalid.');
    });

    it('should throw MatrixError when not given a matrix', () => {
        var a = 12;
        assert.throws(() => transpose(a), MatrixError, 'No matrix given.');
    });

    it('should be integrated to Array.prototype', () => {
        var expected = true;
        var actual = Array.prototype.hasOwnProperty('transpose');
        assert.equal(expected, actual);
    });

    it('should transpose an array through the Array.prototype property',
    () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
        var actual = a.transpose();
        assert.deepEqual(expected, actual);
    });
});

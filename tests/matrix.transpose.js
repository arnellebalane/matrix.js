import { transpose, MatrixError } from '../source/matrix';
import assert from 'assert';


describe('matrix.transpose', () => {
    it('should transpose an empty matrix', () => {
        const a = [];
        const expected = [];
        const actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose a non-empty square matrix', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
        const actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose a non-empty non-square matrix', () => {
        const a = [[1, 2, 3], [4, 5, 6]];
        const expected = [[1, 4], [2, 5], [3, 6]];
        const actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose a 1-by-n matrix', () => {
        const a = [[1, 2, 3, 4, 5]];
        const expected = [[1], [2], [3], [4], [5]];
        const actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should transpose an n-by-1 matrix', () => {
        const a = [[1], [2], [3], [4], [5]];
        const expected = [[1, 2, 3, 4, 5]];
        const actual = transpose(a);
        assert.deepEqual(expected, actual);
    });

    it('should throw MatrixError when given an invalid matrix', () => {
        const a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        assert.throws(() => transpose(a), MatrixError, 'Given matrix is invalid.');
    });

    it('should throw MatrixError when not given a matrix', () => {
        const a = 12;
        assert.throws(() => transpose(a), MatrixError, 'No matrix given.');
    });

    it('should be integrated to Array.prototype', () => {
        const expected = true;
        const actual = Array.prototype.hasOwnProperty('transpose');
        assert.equal(expected, actual);
    });

    it('should transpose an array through the Array.prototype property', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
        const actual = a.transpose();
        assert.deepEqual(expected, actual);
    });
});

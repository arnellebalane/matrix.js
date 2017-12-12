import { valid } from '../source/matrix';
import assert from 'assert';


describe('matrix.valid', () => {
    it('should return true when given an empty matrix', () => {
        const a = [];
        const expected = true;
        const actual = valid(a);
        assert.equal(expected, actual);
    });

    it('should return true when given a valid matrix', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = true;
        const actual = valid(a);
        assert.equal(expected, actual);
    });

    it('should return false when given an invalid matrix', () => {
        const a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        const expected = false;
        const actual = valid(a);
        assert.equal(expected, actual);
    });

    it('should return false when not given a matrix', () => {
        const a = 12;
        const expected = false;
        const actual = valid(a);
        assert.equal(expected, actual);
    });

    it('should be integrated to Array.prototype', () => {
        const expected = true;
        const actual = Array.prototype.hasOwnProperty('valid');
        assert.equal(expected, actual);
    });

    it('should validate a matrix through the Array.prototype property', () => {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = true;
        const actual = a.valid();
        assert.equal(expected, actual);
    });
});

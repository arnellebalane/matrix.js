import { valid } from '../src/matrix';
import assert from 'assert';


describe('matrix.valid', () => {
    it('should return true when given an empty matrix', () => {
        var a = [];
        var expected = true;
        var actual = valid(a);
        assert.equal(expected, actual);
    });

    it('should return true when given a valid matrix', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = true;
        var actual = valid(a);
        assert.equal(expected, actual);
    });

    it('should return false when given an invalid matrix', () => {
        var a = [[1, 2, 3], [4, 5], [7, 8, 9]];
        var expected = false;
        var actual = valid(a);
        assert.equal(expected, actual);
    });

    it('should return false when not given a matrix', () => {
        var a = 12;
        var expected = false;
        var actual = valid(a);
        assert.equal(expected, actual);
    });

    it('should be integrated to Array.prototype', () => {
        var expected = true;
        var actual = Array.prototype.hasOwnProperty('valid');
        assert.equal(expected, actual);
    });

    it('should validate a matrix through the Array.prototype property', () => {
        var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        var expected = true;
        var actual = a.valid();
        assert.equal(expected, actual);
    });
});

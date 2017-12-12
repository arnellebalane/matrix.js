function valid(matrix) {
    if (matrix instanceof Array) {
        for (let i = 0; i < matrix.length - 1; i++) {
            if (matrix[i].length !== matrix[i + 1].length) {
                return false;
            }
        }
        return true;
    }
    return false;
}


/* eslint no-extend-native: "off" */
Array.prototype.valid = function matrixValid() {
    return valid(this);
};


module.exports = valid;

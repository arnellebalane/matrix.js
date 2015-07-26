function valid(matrix) {
    if (matrix instanceof Array) {
        for (var i = 0; i < matrix.length - 1; i++) {
            if (matrix[i].length !== matrix[i + 1].length) {
                return false;
            }
        }
        return true;
    }
    return false;
}


Array.prototype.valid = function() {
    return valid(this);
};


module.exports = valid;

function ones(rows, columns) {
    columns = columns || rows;
    if (typeof rows === 'number' && typeof columns === 'number') {
        var matrix = [];
        for (var i = 0; i < rows; i++) {
            matrix.push([]);
            for (var j = 0; j < columns; j++) {
                matrix[i].push(1);
            }
        }
        return matrix;
    }
    throw new TypeError('Matrix dimensions should be integers.');
}


module.exports = ones;

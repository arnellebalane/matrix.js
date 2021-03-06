function zeros(rows, columns) {
    columns = columns || rows;
    if (typeof rows === 'number' && typeof columns === 'number') {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push([]);
            for (let j = 0; j < columns; j++) {
                matrix[i].push(0);
            }
        }
        return matrix;
    }
    throw new TypeError('Matrix dimensions should be integers.');
}


module.exports = zeros;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, value) {
    let [row, col] = [0, matrix[0].length - 1];

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === value) return true;
        else if (value > matrix[row][col]) row++;
        else if (value < matrix[row][col]) col--;
    }
    return false;
};

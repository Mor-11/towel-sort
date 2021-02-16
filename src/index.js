
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let nemder = [];
    if (!matrix) {
        return nemder;
    } else {
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 == !0) {
                for (let j = matrix[i].length - 1; j >= 0; j--) {
                    nemder.push(matrix[i][j]);
                }
            } else {
                for (let j = 0; j < matrix[i].length; j++) {
                    nemder.push(matrix[i][j]);
                }
            }
        }
    }
    return nemder;
};

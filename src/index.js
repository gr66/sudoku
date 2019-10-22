module.exports = function solveSudoku(matrix) {
// function solveSudoku(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix.length; column++) {
            if (matrix[row][column] != 0) continue;

            let availableNumber = resolveField(matrix, row, column);

            for (let num = 0; num < availableNumber.length; num++) {
                matrix[row][column] = availableNumber[num];
                if (solveSudoku(matrix)) return matrix;
            }
            matrix[row][column] = 0;
            return false;
        }
    }
    console.log(matrix)
    return true;
}

 function resolveField(matrix, row, column) {
    let freeNumbers = [],
        currentRow = matrix[row],
        currentColumn = matrix.map(row => row[column]),
        currentSquare = executeSquare(matrix, row, column),
        presentsInt = Array.from(new Set(currentRow.concat(currentColumn)
            .concat(currentSquare))).filter(el => el != 0) || [];
    for (let i = 1; i < 10; i++) {
        if (!presentsInt.includes(i)) freeNumbers.push(i);
    }
    return freeNumbers;
}

function executeSquare(matrix, row, column) {
    let square = [],
        limit = 3,
        startRow = Math.floor(row / 3) * 3,
        startColumn = Math.floor(column / 3) * 3;

    for (let i = 0; i < limit; i++) {
        for (let j = 0; j < limit; j++) {
            let cell = matrix[startRow + i][startColumn + j];
            if (cell != 0) square.push(cell);
        }
    }
    return square;
}

// const initial = [
//     [6, 5, 0, 7, 3, 0, 0, 8, 0],
//     [0, 0, 0, 4, 8, 0, 5, 3, 0],
//     [8, 4, 0, 9, 2, 5, 0, 0, 0],
//     [0, 9, 0, 8, 0, 0, 0, 0, 0],
//     [5, 3, 0, 2, 0, 9, 6, 0, 0],
//     [0, 0, 6, 0, 0, 0, 8, 0, 0],
//     [0, 0, 9, 0, 0, 0, 0, 0, 6],
//     [0, 0, 7, 0, 0, 0, 0, 5, 0],
//     [1, 6, 5, 3, 9, 0, 4, 7, 0]
// ];

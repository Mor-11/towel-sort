
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let nemder = []; // добавление пустого массива 
    if (!matrix) {  // проверка, если в массив не задан, возрощаем пустой массив 
        return nemder;
    } else { 
        for (i = 0; i < matrix.length; i++) {  //перебор массива 
            if (i % 2 == !0) { // проверка, если массив в массиве в позиции нечетного  числа
                for (let j = matrix[i].length - 1; j >= 0; j--) { // перебор массива будет с послелнего 
                    nemder.push(matrix[i][j]); // добовление  в новый массив из старого массива 
                }
            } else { //  если массив в массиве в позиции четного  числа
                for (let j = 0; j < matrix[i].length; j++) {// перебор массива в массиве 
                    nemder.push(matrix[i][j]);// добовление  в новый массив из старого массива 
                }
            }
        }
    }
    return nemder;
};

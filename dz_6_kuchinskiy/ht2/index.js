/* 2. Создать функцию, вычисляющую среднее арифметическое 
числовых элементов массива любой длины. */

function arithmeticalMean(array = [1, 2, 3, 66, 787, -6, 20]) {
    let result = null;
    for (let i = 0; i < array.length; i++) {
        result += array[i]/array.length;
    }
    return result;
}
console.log(arithmeticalMean());



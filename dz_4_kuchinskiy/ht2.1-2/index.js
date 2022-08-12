/* Найдите минимальный элемент массива и 
его порядковый номер. */

const numsArr = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37,
46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
const numsArrMin = Math.min(...numsArr)
const numsArrMin_Position = numsArr.indexOf(numsArrMin) + 1;

console.log(numsArrMin, numsArrMin_Position);

// Найдите максимальный элемент массива и 
// его порядковый номер.

const numsArrs = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37,
46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
const numsArrMax = Math.max(...numsArrs)
const numsArrMax_Position = numsArrs.indexOf(numsArrMax) + 1;

console.log(numsArrMax, numsArrMax_Position);


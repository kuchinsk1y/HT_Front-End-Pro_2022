// Определить количество отрицательных элементов.
const numsArr = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37,
46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];

positive = [];
negative = [];

for (let i = 0; i < numsArr.length; i++) {
    numsArr[i] >= 0 ? positive.push(numsArr[i]) : negative.push(numsArr[i]);
}
let result = 'Negative numbers amount: ' + negative.length;
console.log(result);


// Найти количество нечетных положительных элементов.

for (let i in numsArr) {
    if(numsArr[i] > 0 && numsArr[i] % 2 != 0)
    console.log(numsArr.length);
} 



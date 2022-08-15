//  Найти сумму четных положительных элементов.

const numsArr = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 
46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];

var sumNumsArr = numsArr.reduce((res, item, index) => {
    if (index % 2 !== 0) res += item;
    return res;
}, 0);

console.log(sumNumsArr);

// Найти произведение положительных элементов. 


let sum = 1;
for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] > 0) {
        sum = sum * numsArr[i];
    }
}

console.log(sum);

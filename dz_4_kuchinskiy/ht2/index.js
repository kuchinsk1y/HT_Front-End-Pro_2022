// 2. Дан массив
const numsArr = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37,
46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];

let result = 0;
for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] > 0) {
        result += numsArr[i];
    }
}
console.log(result);


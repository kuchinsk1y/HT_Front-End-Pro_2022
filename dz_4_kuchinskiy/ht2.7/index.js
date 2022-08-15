/* Найти самый большой среди элементов массива,
остальное обнулить. */

const numsArray = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37,
46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
let max = -Infinity;
let maxi = -1;

for (let i = 0; i < numsArray.length; i++) {
  if (numsArray[i] > max) {
    max = numsArray[i];
    if (maxi > -1)
      numsArray[maxi] = 0;
    maxi = i;
  } else {
    numsArray[i] = 0;
  }
}
console.log(numsArray);




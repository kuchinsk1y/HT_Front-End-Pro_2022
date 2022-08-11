// 5 Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел, пример: 10369 1 0 3 6 9.


let num1 = (10369);
const r1 = num1 % 10;
const r2 = ((num1 - r1) / 10) % 10;
const r3 = ((num1 - r2) / 100) % 10;
const r4 = ((num1 - r3) / 1000) % 10;
const r5 = ((num1 - r4) / 10000) % 10;
console.log(num1);
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);


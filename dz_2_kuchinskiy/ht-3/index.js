//  3) Даны 3 числа, определить наибольшее из них.


const num1 = prompt('');
const number1 = num1 / 100;
const number2 = ((num1 - number1) / 10) % 10;
const number3 = num1 % 10;

if (number1 > number2) {
    console.log("The first number is the largest");
} else if (number2 > number3) {
    console.log("The second number is the largest");
} else {
    console.log("The third number is the largest");
}
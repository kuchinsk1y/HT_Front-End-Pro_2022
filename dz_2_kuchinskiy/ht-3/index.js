//  3) Даны 3 числа, определить наибольшее из них.


const num1 = prompt('');
const number1 = num1 / 100;
const number2 = ((num1 - number1) / 10) % 10;
const number3 = num1 % 10;

if (number1 > number2 && number1 > number3){
    console.log("1 number is the biggest");
} else if (number2 > number1 && number2 > number3){
    console.log("2 number is the biggest");   
} else if (number3 > number1 && number3 > number2){
    console.log("3 number is the biggest");
} else {
    console.log("2 biggest numbers are equal");
}

// 1

// Дано трехзначное число. 
// Верно ли, что все цифры одинаковы? ‘333’
// Есть ли среди цифр цифры одинаковые? ‘332’ ‘233’ ‘323’

const num1 = prompt('');
const number3 = num1 % 10;
const number2 = ((num1 - number3) / 10) % 10;
const number1 = num1 / 100;

if (number1 == number2 || number2 == number3 || number1 == number3) {
    console.log("All the numbers are the same");
} else {
    console.log("All numbers are not the same");
}

if (number3 == number2) {
    console.log("The second and third numbers are the same");
} else if (number1 == number2) {
    console.log("The first and second numbers are the same");
} else if (number1 == number3) {
    console.log("The first and third numbers are the same");
} else {
    console.log("No identical numbers");
}







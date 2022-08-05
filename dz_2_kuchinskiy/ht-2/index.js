// Определить, есть ли заданное шестизначное число зеркальным? (123321, 147741)

const sixDigit = prompt("Enter a six-digit number");
const  num1 = sixDigit % 10;
const  num2 = ((sixDigit - num1) / 10) % 10;
const  num3 = ((sixDigit - num2) / 100) % 10;
const  num4 = ((sixDigit - num2) / 100) % 10;
const  num5 = ((sixDigit - num1) / 10) % 10;
const  num6 = ((sixDigit - num2) / 10) % 10;


if (num1 === num6 ||num2 === num5 ||num3 === num4) {
    console.log("right");
} else {
    console.log("error");
}


        
        
        
        
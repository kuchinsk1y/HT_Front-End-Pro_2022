// Дано целое число (ввести через prompt). Выяснить, является ли оно
// простым (простым называется число, больше 1, 
// не имеющих других делителей кроме 1 и себя).



const numPr = parseInt(prompt()); 
 let numPrPrime = true; 
 if (numPr === 1) { 
     console.log("1 is not prime!"); 
 } 
 else if (numPr > 1) { 
     for (let i = 2; i < numPr; i++) { 
         if (numPr % i == 0) { 
            numPrPrime = false; 
             break; 
         } 
     } 
     if (numPrPrime) { 
         console.log(`${numPr} The number is prime`); 
     } else { 
         console.log(`${numPr} The number is not prime!`); 
     } 
 } 
 else { 
     console.log("The number is not prime!"); 
 }






/* Вывести в консоль числа от 20 до 30 через пробел 
используя шаг 0,5 (20 20,5 21 21,5….) */

let str = ' ';
for (let step = 20; step <= 30; step = step + 0.5){
    str += step + ' ';
}
console.log(str.trim());




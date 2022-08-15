/* 1. Создать массив, длину и элементы которого задает пользователь
(через prompt) (повторяется промпт, пока пользователь не нажмет кэнсэл).
Затем отсортировать массив по росту. Затем, удалить элементы из массива 
со 2 по 4. По мере изменений выводить содержимое массива в консоль. */




let flag = true;
let numSet = [];

while (flag){
    number = prompt();
    flag = (number == null) ? false : true;  
    if (flag === false){
        break;
    }
    numSet.push(number);
    console.log(number);
}
console.log(`Debug message: Array from keyboard: ${numSet}`);


function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0; 
    if (a < b) return -1; 
}
numSet.sort(compareNumeric);
console.log(`Debug message: Sort: ${numSet}`);
numSet.splice(1,3);
console.log(`Debug message: Delete elem. : ${numSet}`);



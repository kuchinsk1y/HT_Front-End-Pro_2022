/* 1. Создать массив, длину и элементы которого задает пользователь
(через prompt) (повторяется промпт, пока пользователь не нажмет кэнсэл).
Затем отсортировать массив по росту. Затем, удалить элементы из массива 
со 2 по 4. По мере изменений выводить содержимое массива в консоль. */




let flag = true;
let numbersSet = [];

while (flag){
    number = prompt();
    flag = (number == null) ? false : true;  
    numbersSet.push(number);
    console.log(number);
}
console.log(numbersSet);
numbersSet.splice(3,2);
console.log(numbersSet);

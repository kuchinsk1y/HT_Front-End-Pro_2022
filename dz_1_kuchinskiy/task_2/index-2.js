// 2 Создать скрипт, который получает два значения и выводит true, если значения равны, false – если нет.




const userfirstValue = +prompt('введите первое число');
const usersecondValue = +prompt('введите второе число');

if (userfirstValue>usersecondValue || usersecondValue>userfirstValue) {
    console.log(userfirstValue == usersecondValue);
}



/* 1. Создать сущность человека (данные вводит пользователь)
имя
возраст
Метод вывода данных об объекте */

function usersInfo() {
    this.name = prompt("Enter your name");
    alert(`Hello ${this.name}!`);
    this.age = prompt("Enter age");
    this.gender = prompt("Enter gender"); 
}

let user = new usersInfo();
console.log(user);

function showData(usersName){
    for (item in usersName){
      console.log(item, ":" ,usersName[item]);
    }
}

showData(user);


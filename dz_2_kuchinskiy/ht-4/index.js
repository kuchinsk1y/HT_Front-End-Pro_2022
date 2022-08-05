/* 4) Логирование пользователя:

Проверить, имеет ли пользователь право доступа в админ панель сайта.

Сначала проверяется логин ли равен admin, если так то спросить пароль у пользователя, который равен mySuperPassword.

Результаты каждого шага выводить в консоль. */


const logIn = prompt("Enter username");

switch (logIn) {
    case "admin":
        console.log("Matches");
        break;
    default:
        alert("You do not have access to the site panel");
        console.log("No access");
}

let password = prompt("Enter password");

switch (password) {
    case "mySuperPassword":
        console.log("Matches");
        break;
    default:
        alert("You do not have access to the site panel");
        console.log("No access");
}
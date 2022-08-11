/* 4) Логирование пользователя:

Проверить, имеет ли пользователь право доступа в админ панель сайта.

Сначала проверяется логин ли равен admin, если так то спросить пароль у пользователя, который равен mySuperPassword.

Результаты каждого шага выводить в консоль. */


const logIn = prompt("Enter username");
let password = "mySuperPassword";

if (logIn == "admin") {
    console.log("Matches");
    prompt("Enter password");
    if (password == "mySuperPassword") {
        console.log("Matches");
        alert("login successfully");
    } else {
        alert("You do not have access to the site panel");
        console.log("No access");
    }
} else {
    alert("You do not have access to the site panel");
    console.log("No access");
}
/* 1. Создать функцию для расчета произведения двух чисел, 
вызываемого следующим образом: apl(5)(2). 
Функция должна возвращать результат 
(внутри функции не должно быть консоль лога!) */

function curry(curryApl) {
    return function(a) {
        return function(b) {
            return curryApl(a, b);
        };
    };
}

function apl(x, y) {
    return x * y;
}

let result = curry(apl);
console.log(result(5)(2));


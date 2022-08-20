/* 4. Написать функцию, принимающую один параметр. При первом вызове
она его запоминает, при втором - суммирует переданный параметр с 
тем, что передали впервые и т.д. Все это с замыканиями, 
например: sum(3) = 3 sum(5) = 8 sum(20) = 28
На каждом вызове возвращает текущую сумму */

function takOpAr() {
    let count = 0;
    return function (userVar) {
        return count+=userVar;
    };
}
let bill = takOpAr();
console.log("sum: " + bill(3));
console.log("sum: " + bill(5));
console.log("sum: " + bill(20));

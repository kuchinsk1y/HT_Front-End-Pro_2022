// 3) Дано целое число N (ввести через prompt). Вывести все целые 
// числа от 1 до 100, квадрат которых не превышает числа N. 
// Если N не является числом, то вывести ошибку.

let N = prompt();
if ( isFinite(N)) {
    for(let i = 1; i < Math.sqrt(N); i++){
        if (i ** i < N) {
            continue;
        }
        console.log(i);
    }
} else {
    console.log("Error")
}




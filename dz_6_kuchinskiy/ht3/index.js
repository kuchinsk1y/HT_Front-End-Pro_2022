/* 3. Создать функцию, которая удаляет из строки все символы, 
переданные вторым аргументом. 'func("hello world", ['l', 'd'])' 
вернет нам "heo wor" */

function strRepl(str = "hello world", delEl = ['l', 'd']){
    let newStr = str.split("");
    let result = newStr.reduce((acc, item) => {if (!delEl.includes(item)) acc.push(item); 
    return acc;} , []);             
    return result.join('');
}

answer = strRepl();
console.log(answer)


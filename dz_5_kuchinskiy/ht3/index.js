/* 3 Реализовать функцию generateKey(length, characters), 
которая возвращает набор случайных символов из 
набора characters длиной length */

function generateKey(length, characters){
    let key="";
    for(i=0; i<length; i++){
    key += characters[Math.round(Math.random()*length)];
    }
    return key;
}

const characters = "abcdefghklmop12345678";
const key = generateKey(17, characters);

 console.log(`Your pass is: ${key}`);
/* 2 Реализовать функцию removeElement(array, item) 
чтобы удалить элемент item из массива array. */



let array = [1, 2, 3, 4, 5, 6, 7, 8];
let item = 5;

function removeElement(array, item)  {
    let index = array.indexOf(item);
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ]
}
array = removeElement(array, item);

console.log(array);

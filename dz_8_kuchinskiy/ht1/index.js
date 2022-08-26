/* Есть блок с текстом на странице и кнопку. 
При нажатии на кнопку текст изменяет цвет. 
При повторном нажатии – возвращается предыдущий цвет */







const newColorText = document.querySelector(".header_text");
const headerBtn = document.querySelector(".header_btn");

headerBtn.addEventListener("click", function() {
    newColorText.classList.toggle("newText-color");
})
 
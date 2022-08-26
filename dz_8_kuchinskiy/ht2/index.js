/* На странице есть две кнопки. При нажатии на первую кнопку пользователь 
должен ввести в prompt ссылку, при нажатии на вторую – 
переадресовывается на другой сайт (по ранее введенной ссылке).

document.location.href = “url_to_go”; */



let link;
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");

btnOne.addEventListener("click", function () {
  link = prompt("Enter a Link:");
  if (!isValidUrl(link)) {
    alert("Link is Invalid!");
    link = "";
  }
});

btnTwo.addEventListener("click", function () {
  document.location.href = link;
});

function isValidUrl(url) {
  let objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
  return objRE.test(url);
}
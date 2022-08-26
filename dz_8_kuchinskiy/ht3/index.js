// Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана динамически)

function createMatrix(rows, cols) {
  const matrix = [];
  
  for (let i = 0; i < 10; i++) {
    matrix[i] = [];
    
    for (let j = 0; j < 10; j++) {
      matrix[i][j] = i * 10 + j + 1;
    }
  }
  
  return matrix;
}

document.querySelector("body").insertAdjacentHTML(
  "beforeend",
  `
  <table>${createMatrix()
    .map(
      (n) => `
      <tr>${n
        .map(
          (m) => `
          <td>${m}</td>`
          )
          .join("")}
          </tr>`
          )
          .join("")}
          </table>
          `
          );
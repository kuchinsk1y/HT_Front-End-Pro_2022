"use stict";

let text;
let i = 0;
const taskArray = [];

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  i += 1;
  event.preventDefault();
  if (this.elements[0].value.length === 0) {
    alert("You cant add empty field!");
    return;
  } else if (this.elements[0].value.length > 20) {
    alert("Your task is too long!");
    return;
  }

  const newTask = {
    id: taskArray.length === 0 ? 0 : taskArray[taskArray.length - 1].id + 1,
    name: form.elements[0].value,
    isDone: false,
  };

  taskArray.push(newTask);

  console.log(taskArray);

  const div = createNode("div", [
    { name: "class", value: "wrapper" },
    { name: "data-id", value: newTask.id },
  ]);
  document.body.appendChild(div);

  text = this.elements[0].value;

  const field = createNode("p", [{ name: "class", value: "default" }]);
  field.innerText = text;
  div.appendChild(field);

  const checkbox = createNode("input", [
    { name: "type", value: "checkbox" },
    { name: "name", value: "checkbox" },
    { name: "class", value: "checkbox" },
  ]);
  div.appendChild(checkbox);

  const removeBtn = createNode("button", [
    { name: "id", value: `btnRemoveTask${i}` },
    { name: "class", value: "removeBtn" },
  ]);
  removeBtn.innerText = "Remove";
  div.appendChild(removeBtn);

  const btnRemoveTask = document.getElementById(`btnRemoveTask${i}`);
  btnRemoveTask.addEventListener("click", removeField);

  checkbox.addEventListener("change", function () {
    const wrapper = this.closest(".wrapper");
    const id = wrapper.getAttribute("data-id");

    const task = taskArray.find((taskItem) => taskItem.id == id);
    task.isDone = this.checked;

    if (task.isDone) {
      field.setAttribute("class", "line-through ");
      console.log("Checkbox is checked..");
    } else {
      field.setAttribute("class", "");
      console.log("Checkbox is not checked..");
    }
  });

  this.elements[0].value = "";

  function removeField() {
    field.remove();
    removeBtn.remove();
    checkbox.remove();
    div.remove();
  }
});

function createNode(tagName, attributes) {
  const el = document.createElement(tagName);
  attributes.forEach(({ name, value }) => {
    el.setAttribute(name, value);
  });
  return el;
}

select.addEventListener("change", function () {
  switch (this.value) {
    case "done":
      console.log(this.value);
      for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].isDone == false) {
          const element = document.querySelector(`[data-id="${i}"]`);

          element.setAttribute("class", "none");
        }
      }
      for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].isDone != false) {
          const element = document.querySelector(`[data-id="${i}"]`);

          element.setAttribute("class", "wrapper");
        }
      }
      break;
    case "inProgress":
      console.log(this.value);
      for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].isDone != false) {
          const element = document.querySelector(`[data-id="${i}"]`);

          element.setAttribute("class", "none");
        }
      }
      for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].isDone == false) {
          const element = document.querySelector(`[data-id="${i}"]`);

          element.setAttribute("class", "wrapper");
        }
      }
      break;
    case "all":
      console.log(this.value);
      for (let i = 0; i < taskArray.length; i++) {
        const element = document.querySelector(`[data-id="${i}"]`);

        element.setAttribute("class", "wrapper");
      }
      break;
  }
});

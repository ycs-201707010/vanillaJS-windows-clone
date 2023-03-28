const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

/** Todo list를 그리는 기능을 하는 함수. */
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.appendChild(span);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

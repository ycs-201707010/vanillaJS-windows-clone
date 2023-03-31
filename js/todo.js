const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

/** Todo list를 그리는 기능을 하는 함수. */
function paintToDo(newToDo) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newToDo;

  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", (event) => {
    const li = event.target.parentElement;
    li.remove(); // HTML 태그를 지우는 함수
  });

  li.appendChild(span);
  li.appendChild(btn);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDos.push(newToDo);
  toDoInput.value = "";
  paintToDo(newToDo);
}

console.log(toDos);
toDoForm.addEventListener("submit", handleToDoSubmit);

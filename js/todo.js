const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/** Todo list를 그리는 기능을 하는 함수. */
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", (event) => {
    const li = event.target.parentElement;

    li.remove(); // HTML 태그를 지우는 함수
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();

    console.log(toDos);
  });

  li.appendChild(span);
  li.appendChild(btn);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;

  toDoInput.value = "";

  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);

  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("Hello " + item);
}

/** 로컬 스토리지에 저장된 ToDos를 불러와 저장한 변수 */
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}

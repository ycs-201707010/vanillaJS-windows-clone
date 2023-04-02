const toDoForm = document.getElementById("todo-form");
const toDoInfo = toDoForm.querySelector("i");
const toDoTooltip = toDoForm.querySelector(".tooltip");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("list");

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

  const label = document.createElement("label");
  label.innerText = newToDo.text;
  label.htmlFor = newToDo.text;

  const btn = document.createElement("button");
  //   btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  btn.innerText = "❌";
  btn.addEventListener("click", () => {
    li.remove(); // HTML 태그를 지우는 함수
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();

    console.log(toDos);
  });

  const checkBox = document.createElement("input");
  checkBox.id = label.htmlFor;
  checkBox.type = "checkbox";

  span.appendChild(label);
  span.appendChild(checkBox);
  span.appendChild(btn);

  li.appendChild(span);

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

let hoverTime = 0;
let hoverInterval;

function showTooltip() {
  hoverInterval = setTimeout(() => {
    toDoTooltip.style.opacity = 100;
    toDoTooltip.style.visibility = "visible";
  }, 700);
}

function hideTooltip() {
  clearTimeout(hoverInterval);
  toDoTooltip.style.opacity = 0;
  toDoTooltip.style.visibility = "hidden";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoInfo.addEventListener("mouseover", showTooltip);
toDoInfo.addEventListener("mouseout", hideTooltip);

/** 로컬 스토리지에 저장된 ToDos를 불러와 저장한 변수 */
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

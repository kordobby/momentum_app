const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";


let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
  const list = event.target.parentElement;
  list.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(list.id));
  saveToDos();
};

function paintToDo(newToDo) {
  const list = document.createElement("li");
  list.id = newToDo.id;
  const icon = document.createElement("span");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo );
  list.appendChild(icon);
  icon.innerHTML = '<i class="fa-solid fa-wand-sparkles"></i>';
  list.appendChild(span);
  list.appendChild(button);
  span.innerText = newToDo.text;
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text:newToDo,
    id: Date.now()
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
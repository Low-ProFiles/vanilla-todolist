const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");
const dayTitle = document.querySelector("#dayName");

const TODOS_KEY = "todos";
let todos = [];

const lang = navigator.language;

let date = new Date();

let dayName = date.toLocaleString(lang, {
  weekday: "long"
});

dayTitle.innerHTML = dayName;

let listLenght = list.length;

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

const generateTempalate = (todo) => {
  const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="far fa-trash-alt delete"></i>
                </li>`;
  todoList.innerHTML += html;
  todos.push(html);
  saveToDos();
};

function addTodos(e) {
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTempalate(todo);
    submitForm.reset();
  }
  if (e.lenght > 20){
    todo += minFifth(e.substring(51));  
    return e.substring(0,50);
    } else {
    return e;
  }
  saveToDos();
}

submitForm.addEventListener("submit", addTodos);
addButton.addEventListener("click", addTodos);

function deleteTodos(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  const cleanToDos = todos.filter(function (toDo) { 
    return toDo.id !== parseInt(li.id);
  });
  todos = cleanToDos; // 추출된 내용을 toDos에 넣음
  saveToDos();
}

todoList.addEventListener("click", deleteTodos);

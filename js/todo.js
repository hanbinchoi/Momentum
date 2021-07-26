// Todo List

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // array를 string형태로 저장
    
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText=`${newTodoObj.text}`;
    span.style.marginRight = "10px";
    const button = document.createElement("button");
    button.innerText = "❌"; //이모지 단축기는 윈도우 + .
    button.addEventListener("click",deleteToDo);
    button.style.padding = 0;
    button.style.marginRight = "2px";
    button.style.background="transparent";
    button.style.border="none";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}

// filter는 arrat개수 만큼 함수를 호출하고 true면 그대로 아레이에 저장되고 false면 어레이에서 그 데이터는 제외된다.
// array에서 그냥 제외하면 그 어레이를 갖고 제외하는 것이 아닌, 제거된 어레이가 생성되는 것이라, 남는 어레이가 생긴다.


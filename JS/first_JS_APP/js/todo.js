/*
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    // 누른 버튼의 부모를 알아낼때는 parentNode를 사용한다.
    const btn = event.target;
    const li = btn.parentNode;
    // 태그를 삭제할때에는 removeChild를 사용함.
    toDoList.removeChild(li);
    // filter는 array의 모든 아이템을 통해 함수를 실행하고, 그리고 true인 아이템들만 가지고 새로운 array를 만들음 
    const cleanToDos = toDos.filter(function(toDo) {
        // 문자열과 숫자는 비교되지 않는다 문자열을 int형 숫자로 바꾸려면 parseInt를 사용한다.
        return toDo.id !== parseInt(li.id);
    });

    // const일 경우 값의 변경을 할 수 없어 let으로 형태를 바꾼 후 toDos에 값을 대입해준다.
    toDos = cleanToDos;
    // toDos의 값을 저장함.
    saveToDos();
}

function saveToDos() {
    // localStorage에는 자바스크립트의 데이터를 넣어줄 수 없음, 오직 string형태의 문자열만 저장가능함
    // JSON.stringify는 자바스크립트의 object를 string으로 변환시켜줌
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    // 얻어올때는 querySelector를 썻다면 생성할때는 createElement를 사용함
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌"
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text;
    // 태그안에 다른 태그를 넣을때 자식으로 넣을때는 appendChild를 사용함
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null) {
        // 저장되어있는 JSON 형식을 파싱해서 object화 한다.
        const parsedToDos = JSON.parse(loadedToDos);
        // array가 가진 forEach로 반복시킴 array에 담겨있는 것들을 각각에 함수를 한번씩 실행시켜주는 것
        parsedToDos.forEach(function(toDo) {
            console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}


init();
*/
const form = document.querySelector(".js-to-do"),
    input = document.querySelector(".js-add-to-do"),
    list = document.querySelector(".js-list");

let toDos = [];

function persistToDos() {
    const stringToDo = JSON.stringify(toDos);
    localStorage.setItem("toDos", stringToDo);
}

function saveToDo(text) {
    const toDoObject = {
        id: toDos.length + 1,
        value: text
    };
    toDos.push(toDoObject);
    persistToDos();
}

function handleDelete(event) {
    const target = event.target;
    const li = target.parentElement;
    const ul = li.parentElement;
    const toDoId = li.id;
    ul.removeChild(li);
    toDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(toDoId);
    });
    persistToDos();
}

function addToDo(text) {
    const toDo = document.createElement("li");
    toDo.className = "toDo";
    toDo.id = toDos.length + 1;
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "❌";
    deleteBtn.className = "toDo__button";
    deleteBtn.addEventListener("click", handleDelete);
    const label = document.createElement("label");
    label.innerHTML = text;
    toDo.appendChild(label);
    toDo.appendChild(deleteBtn);
    toDo.style.textAlign = "center";
    list.appendChild(toDo);
    saveToDo(text);
}

function onSubmit(event) {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addToDo(value);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem("toDos");
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            addToDo(toDo.value);
        });
    }
    return;
}

function init() {
    loadToDos();
}

form.addEventListener("submit", onSubmit);

init();
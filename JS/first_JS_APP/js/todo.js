const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos(){
    // localStorage에는 자바스크립트의 데이터를 넣어줄 수 없음, 오직 string형태의 문자열만 저장가능함
    // JSON.stringify는 자바스크립트의 object를 string으로 변환시켜줌
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    // 얻어올때는 querySelector를 썻다면 생성할때는 createElement를 사용함
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌"
    span.innerText = text;
    // 태그안에 다른 태그를 넣을때 자식으로 넣을때는 appendChild를 사용함
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null)
    {
        // 저장되어있는 JSON 형식을 파싱해서 object화 한다.
        const parsedToDos = JSON.parse(loadedToDos);
        // array가 가진 forEach로 반복시킴 array에 담겨있는 것들을 각각에 함수를 한번씩 실행시켜주는 것
        parsedToDos.forEach(function(toDo){
            console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}


init();
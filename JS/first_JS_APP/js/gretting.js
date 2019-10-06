// querySelecotor 는 찾은 가장 첫번째 값을 가져옴 
// localStorage는 자신의 로컬 컴퓨터에 저장되는 정보임 
// 저장시 : localStorage.setItem("key", value) 으로 정보를 저장함
// 값을 가져올시 : localStorage.getItem("key") 로 값을 가져옴 
const nameContainer = document.querySelector(".js-name");

function paintName(name) {
    nameContainer.innerHTML = "";
    const title = document.createElement("span");
    title.className = "name__text";
    title.innerHTML = `안녕하세요. ${name}씨`;
    title.style.textAlign = "center";
    nameContainer.appendChild(title);
}

function paintInput() {
    const input = document.createElement("input");
    input.placeholder = "이름이 무엇입니까?";
    input.style.textAlign = "center";
    input.type = "text";
    input.className = "name__input";
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    form.appendChild(input);
    nameContainer.appendChild(form);
}

function handleSubmit(event) {
    // 이벤트의 기본동작을 막을 때 사용함 submit일 경우 다른 페이지로 넘어가는걸 막아줌 
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    localStorage.setItem("username", value);
    paintName(value);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    // form에서 submit이벤트가 발생할 시 handleSubmit함수를 실행
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    // 유저가 있을 경우 form이 보이지 않게 하고 greeting이 보여지게 설정
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const name = localStorage.getItem("username");
    if (name === null) {
        paintInput();
    } else {
        paintName(name);
    }
}

function init() {
    loadName();
}

init();
// querySelecotor 는 찾은 가장 첫번째 값을 가져옴 
// localStorage는 자신의 로컬 컴퓨터에 저장되는 정보임 
// 저장시 : localStorage.setItem("key", value) 으로 정보를 저장함
// 값을 가져올시 : localStorage.getItem("key") 로 값을 가져옴 
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    // 이벤트의 기본동작을 막을 때 사용함 submit일 경우 다른 페이지로 넘어가는걸 막아줌 
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
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
    // localStorage에 저장된 currentUser라는 키의 값을 가져옴
    const currentUser = localStorage.getItem(USER_LS);

    // 그 값이 null일 경우
    if (currentUser === null) {
        // 유저가 존재하지 않는 경우 이름 입력을 요청함.
        askForName();
    } else {
        // 유저가 존재하는 경우
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
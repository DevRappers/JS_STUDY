/*
DOM으로 가져오고 js-clock을 그안에서 h1을 찾아 상수화시켜줌.

현재시간을 얻을 때 사용하는 방법
const date = new Date();
date.getDay() = 요일을 가져옴
date.getDate() = 일을 가져옴
date.getHours() = 시간을 가져옴
date.getMinutes() = 분을 가져옴

setInterval(fn, 1000) 첫번째로 실행할 함수와 두번째로 시간(초단위)을 입력받음
*/
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours <10 ? `0${hours}`: hours} : ${minutes < 10 ? `0${minutes}`: minutes} : 
    ${seconds < 10 ? `0${seconds}` : seconds}`;    
}

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();
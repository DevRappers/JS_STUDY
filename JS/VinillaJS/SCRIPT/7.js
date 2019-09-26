// javascript는 이벤트를 위해 만들어졌다
const title = document.querySelector("#title");

// 자바스크립트는 이벤트를 받기를 기다리고 있다. resize라는 이벤트를 

// 인자를 담아 줄 경우 자바스크립트에서 보내줌 이벤트를 함수를 객체에 붙임 
function handleClick(event){
    console.log(event);
    title.style.color = "blue";

}

// 함수가 인자값으로 들어갈 경우에는 ()를 붙이지 않는다.
// 필요한 시점, 이벤트함수(발생)
title.addEventListener("click", handleClick);
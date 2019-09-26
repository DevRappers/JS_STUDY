// javascript는 이벤트를 위해 만들어졌다
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

// 자바스크립트는 이벤트를 받기를 기다리고 있다. resize라는 이벤트를 

// 인자를 담아 줄 경우 자바스크립트에서 보내줌 이벤트를 함수를 객체에 붙임 
function handleClick(){
    const currentColor = title.style.color;

    console.log(currentColor);
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    //title.addEventListener("click", handleClick);
    // 마우스가 들어갈때마다 바뀌게할때
    title.addEventListener("mouseenter",handleClick);
}

init();

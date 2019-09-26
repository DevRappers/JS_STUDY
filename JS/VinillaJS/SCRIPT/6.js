/*
javascript 에서 HTML 변경하는 방법
*/
// id값을 불러오는 방법
const title = document.getElementById("title");
// 노드의 첫번째 자식을 반환함 #으로하면 id를 찾고 . 으로 하면 class 를 찾음
const tt = document.querySelector("#title");
// class 값을 불러오는 방법
const test = document.getElementsByClassName("test");

console.log(title);

// DOM (Document Object Module)
// 자바스크립튼 html에 있는 모든 요소를 가지고옴 => 그걸 객체로 바꿈 => DOM <h1 id="title">Hi! From Js</h1> 이런거

// 해당 태그의 내용을 바꾸는 innerHTML
title.innerHTML = "Hi From JS";

// console.dir을 하면 해당 dom에 어떤 함수와 내용이 있는지 볼수 있음.
console.dir(title);

title.style.color = "red";
document.title = "DevRappers JS";

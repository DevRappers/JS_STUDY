/*
console.log  할때 console은 object이다.

console, alert = 내장함수 = javascript에 내장되어있는 기본 함수
*/
const jjInfo = {
    name : "DevRappers",
    age: 22,
    gender: "Male",
    isGood : true
}

console.log(jjInfo, console);

// 자바스크립트에서 함수를 정의하는 문법
//() 안에들어가는건 인자라함 함수를 호출할때 사용함
function sayHello(name, age){
    console.log('Hello!',name, "you have",age, "years of age");
}

sayHello("DevRappers",22);

// 새로운 문자열 다루는법 백틱(`)을 이용하기 백틱을 이용하면 함수 인자값을 ${}를 활용해서 문자열 내에 입력시킬 수 있다.
// return을 활용한 반환
function sayHello2(name, age)
{
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello2("JJL", 23);

const calculator = {
    plus : function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    }
}
const plus = calculator.plus(5,5);
const minus = calculator.minus(plus,5);
console.log(plus);
console.log(minus);
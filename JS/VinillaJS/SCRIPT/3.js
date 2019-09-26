/*
변수 = 변경되거나 변할 수 있는 수

javascript의 문제점은 나쁘게 쓴걸 잘 이해함. 무조건 실행
규칙 
1. 모두 같은 라인에 있으면 안됨 라인이 달라야함.
2. 끝나는 곳을 선언하는 것은 ;(세미콜론) 이 필요함.

변수는 두 종류의 변수가 있음.
변수의 시작은 생성 -> 초기화 -> 사용 으로 이루어짐
선언과 초기화를 같은 라인에서 할 수 있음.
변수를 초기화 하기전에 단어를 넣어야함  (let) 초기화 or 생성
변수를 선언한 후 값은 변경할 때는 let을 안붙여도됨. (update)

*let, const, var

const : 상수라는 뜻으로 값을 바꾸지 못하는 변수
Assignment to constant variable error : const로 선언한 변수의 값을 바꾸려고 했을 때 발생하는 에러
var : 값은 변경됨, 3년전까지는 var만 사용가능 했음.  
왠만해서는 const로 선언함.
*/

const a = 221;
let b = a - 5;
var c = 5;

console.log(b, a);

/*
변수에 들어갈 data의 종류 
*/

// String : 문자열을 의미함.
const what1 = "문자열"; 
// Boolean : True or False 참 또는 거짓
const what2 = false;
// Number : 숫자형태 음수또는 양수.
const what3 = 111;
// Float
const what4 = 111.111;

console.log(what1);
console.log(what2);
console.log(what3);
console.log(what4);
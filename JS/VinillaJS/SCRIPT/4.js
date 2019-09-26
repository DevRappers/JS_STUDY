/*
array / Object
type의 정렬 
*/
// 문법을 위한 규칙 카멜케이스 CamelCase 
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

// 전혀 효과적이지 않음 이를 해결하기 위해서 나온것이 Array
console.log(monday, tue, wed, thu, fri);

// 다른 프로그래밍언어와 다르게 Object로 모든 타입이 한번에 저장 가능함.
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true,monday];

// 배열의 첨자는 0부터 시작함. 단 배열안에 들어가있는 것보다 큰걸 입력하면 안됨.
console.log(daysOfWeek);
console.log(daysOfWeek[0]);
console.log(daysOfWeek[2]);

/*
Object : Array와 다르게 각 value에 이름을 줄 수 있음. 
Array는 리스트를 정렬된 방식으로 가져올 수 없다. 이름이 몇번째에 져장되었는지 나이가 몇번째인지 까먹을수도..

Object를 선언하기 위해서는 컬리 브라켓을 써주면된다.{}

Object는 안에있는 값을 가지고 오는 건가능한데 
jjinfo = aa; 처럼 이런형식은 불가하다.

만약 DB에서 가져온 리스트 데이터라면 Array를 사용하고
그게 아니라면 Object를 사용하는 것이 적합함
만약 데이터를 합쳐서 만들어야한다고 하면 Object를 사용해야함 Object안에 array
*/
const jjInfo = {
    name : "DevRappers",
    age : 22,
    gender : "Male",
    good : true
};

jjInfo.good = false;

console.log(jjInfo);
console.log(jjInfo.name);
console.log(jjInfo.good);

//Object의 Array형태로도 만들어 줄 수 있음  Array안에 Object데이터가 저장되어있는 형태로
const Info = {
    name : "Info",
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood : [
        {name : "Kimchi", fatty:false},
        {name:"Cheese", fatty:true}
    ]
}

console.log(Info.favFood[0].name);
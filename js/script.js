// 문자열
const text1 = "사 과"; // 큰 따옴표 사용
// console.log("text1에 저장된 내용: ", text1);
// 문자열의 length 프로퍼티 사용,공백도 포함 , 문자열의 길이.

// console.log(`text1의 문자열 길이는` + text1.length + `입니다`);

let username = "홍길동";
let age = 30;
let text2 = "이름 :" + username + "나이 : " + age;
// console.log(text2);

// 템플릿 문자열 ``
// 최신문법
let text3 = `이름 : ${username}, 나이: ${age}`;
// console.log(text3);
const text4 = "";

let x = 5 > 3; // true

let y = 5 < 3; // false

// console.log(x);
// console.log(y);

let xy;
// console.log(xy);
let yx = "";
// console.log(typeof yx);

// 객체 자체
// 객체 지향 언어
const member = {
  id: "kdhong",
  name: "홍길동",
  age: "20",
};
// console.log(member);
// 객체 내부 데이터 접근
// console.log(`아이디 : ${member.id}`);
// console.log(member.id);
// console.log(member.name);
// console.log(member.age);

const members = {
  name: "홍길동",
  age: 30,
};
// Symbol()로 id 생성
let id = Symbol("id");

// 객체 member의 키 id에 문자열 "kdhong" 저장
// 심볼 id가 객체의 키로 사용되면 심볼 데이터형은
// 유일한 식별자이기 때문에 객체의 키 이름이 겹쳐서 충돌하는 경우 방지
member[id] = "kdhong";
// console.log(member.id);
// console.log(id);

// 객체 member에서 심볼 id가 키로 사용된 요소는
// member[id]에 의해 접근 할 수 있다.
// 심볼 id와 새롭게 생성된 Symbol("id")는 서로 다르다
// 고유한 값을 리턴함.
// 생성 할때마다 다른값을 줌.
// console.log(id === Symbol("id"));

const car = ["현대", "기아", "벤츠", "BMW"];
console.log();

console.log(car[0]);

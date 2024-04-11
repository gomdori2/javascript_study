// 전역 스코프
let x = 10;

function fnc() {
  console.log(`전역변수 :  ${x}`);
}
console.log(x);

// 함수 스코프
function fnc1() {
  let y = 11;
  console.log(y);
}
fnc1();
console.log(y); // 지역변수 y로 접근 못함.

// 블록 스코프
// if 내부의 변수에 접근하지 못함.
function fnc2() {
  if (true) {
    let z = 10; // 변수 z는 if문 내, 즉 블록 내부에서 선언
  }
  console.log(z);
}
fnc2();

function changeColor() {}

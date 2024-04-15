# 13. 배열

## 13.1 배열이란

- 여러 값을 하나의 변수에 저장할 수 있게 해주는 특별한 변수 array

### 13.1.1. 배열의 생성

```js
const fruits = ["사과", "딸기", "참외"];

let text = "";

text += fruits;
text += fruits[0];
text += fruits[1];
text += fruits[2];

console.log(text);

const fruits1 = new Array("오렌지", "사과", "딸기", "참외");

console.log(fruits1);
```

### 13.1.2. 배열요소의 메서드들

- join()메서들

- 배열을 문자열로 변경

```js
const animals = ["사자", "사슴", "호랑이", "펭귄"];
let str1 = animals.join();
let str2 = animals.join("/");
console.log(animals);
console.log(str1);
console.log(str2);
```

- push() 메서드 : 배열끝에 추가

```js
const animals = ["사자", "사슴", "호랑이", "펭귄"];

let x = animals.push("도마뱀");
console.log(animals);
```

- pop() 메서드 : 배열의 마지막요소 삭제

```js
const animals = ["사자", "사슴", "호랑이", "펭귄"];

let x = animals.pop();
console.log(animals);
```

- shift() 메서드 : 배열의 첫요소 삭제

```js
const animals = ["사자", "사슴", "호랑이", "펭귄"];

let x = animals.shift();
console.log(animals);
```

- **splice()** 메서드 : 배열에 요소를 추가하거나 삭제할 때 사용

```js
const animals = ["사자", "사슴", "호랑이", "펭귄", "여우", "도마뱀"];

let text = "";
let arr;
// 인덱스 2인 요소 "사슴" 부터 3개의 요소를 삭제하고 "개구리" 삽입

arr = animals;
console.log(arr);
arr = arr.splice(2, 3, "개구리");
console.log(arr);
```

- **indexOf()** 메서드 : 배열에서 특정 문자열의 위치, 즉 인덱스 값을 반환

```js
const animals = ["사자", "사슴", "호랑이", "펭귄", "여우", "도마뱀"];

let index1 = animals.indexOf("사슴");
console.log(index1);
```

- **includes()** 메서드 : 특정 요소의 존재 여부를 파악

```js
const animals = ["사자", "사슴", "호랑이", "펭귄", "여우", "도마뱀"];

// 배열 초기값 설정
const result = animals.includes("악어");
if (result == false) {
  console.log("ss");
}
console.log(result);
```

- **slice()** 메서드 : 인덱스를 이용하여 특정 요소 추출

```js
const animals = ["사자", "사슴", "호랑이", "펭귄", "여우", "도마뱀"];

// 사이에 있는 애들 불러옴
// 사슴~펭귄
// 끝자리는 출력 하지않음.
// 음수 주면 뒤에서부터
const result = animals.slice(1, 4);

console.log(result);
```

- **find()** 메서드
  : 특정 요소를 찾는 조건을 콜백함수를 통해 전달하여
  조건에 해당하는 첫 번째 요소 값을 반환

```js
// 사이에 있는 애들 불러옴
// 사슴~펭귄
// 끝자리는 출력 하지않음.
// 음수 주면 뒤에서
const scores = [78, 84, 100, 98, 67, 87];

// 배열 안에 있는 find 메서드 호출 [{find:{}}]scores.find() 메서드에서 매개변수로
// function(score){return score >= 90}과 같은 콜백함수 사용
// 자바스크립트에서는 함수의 매개변수로 함수가 사용될 수 있다.
// 다른 함수의 매개변수로 전달되는 함수를 콜백 함수라고 한다.
// scores.find() 메서드에서는 배열 scores의 각 요소에 대해 콜백 함수를 실행
// 배열의 요소를 순회하면서 콜백함수의 조건에 맞는 첫 번째 요소 값을 반환
// 배열 반복하다가 첫번째 요소를 찾아줌. ex) 100 98 일 경우 100을 반환
// 콜백 함수에 사용된 score는 배열의 각 요소 값을 가지게 된다.
// scores.find() 메서드는 scores, 즉 배열의 요소 값이 90 이상인 경우 요소를 반환한다.
// function (scores) scores >= 90; {}를 사용 안할 경우 return 없어도 됨
// function (scores) { return scores >= 90; } 대신 {}가 있을 시 return이 무조건 있어야함.
let arr;
arr = scores.find(function (scores) {
  return scores >= 90;
});
// score는 항상 최신상태를 반영하고 있어야한다.
arr = scores.find((score) => score >= 90);

console.log(arr);
// 익명함수로 접근 하는 이유는 클로저때문 즉 변수에 제대로 접근하기 위함임.
//const sum = function () {};

//const scores2 = 0;
//scores.find();
```

- **forEach()** 메서드 : 배열의 각 요소에 대해 매개변수로 설정된 함수를 실행
- 하나하나 까는거

```js
const animals = ["사자", "호랑이", "사슴", "펭귄"];

let text = "";

// 매개변수로 설정된 fnc
// 함수를 배열 animals의 각 요소에 대해 실행
animals.forEach(fnc);

// fnc 함수의 매개변수 item, index는
// 각각 animals 의 요소 값과 인덱스(순번)를 의미

function fnc(item, index) {
  text += `${index} ${item} <br>`;
}

document.getElementById("show").innerHTML = text;
```

- **map()** 메서드 : 배열의 각 요소에 대해 매개변수로 설정된 함수를 실행/(여기까진 forEach랑 같음)하여 얻어진 요소들로 구성된 **새로운** 배열을 반환
- 하나하나 깐거를 다시 포장해서 주는거

```js
const numbers = [1, 2, 3, 4, 5];

// map() 메서드는 forEach() 메서드와 달리 매개변수로 사용되는 함수에서
// 값을 반환하는 return이 존재
// map() 메서드
console.log(numbers);
let arr = numbers.map(function (num) {
  return num * num;
});
console.log(arr);
let text = "";

arr.forEach(fnc);

function fnc(item, index) {
  text += `${index}:${item} `;
}
console.log(text);
document.getElementById("show").innerHTML = text;
```

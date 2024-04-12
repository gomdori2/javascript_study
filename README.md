# 12. 생성자 함수

### 12.1.1 생성자 함수란?

- 생성자함수(constructor function)는 일반 함수와 기능적인 차이는 없다.
- 그러나 일반 함수와 달리 생성자 함수는 new 연산자와 함께 자바스크립트에서
  객체를 생성하기 위해 사용
- 컨벤션
  - 생성자 함수를 정의할 때에는 일반함수와 구분하기 위해 첫 글자를 대문자로 시작

```js
// 생성자 함수의 객체 생성 예시
// 생성자 함수 Member는 세 개의 매개변수 id, name, age를 가진다.
function Member(id, name, age) {
  // 키워드 this는 생성자 함수로 생성되는 객체 자신을 의미
  // 따라서 this.id는 객체 자신의 프로퍼티 id를 의미
  this.id = id;
  this.name = name;
  this.age = age;
}

const member1 = new Member("kdhong", "홍길동", 30);
const member2 = new Member("ssss", "ㄴㄴㄴㄴ", 20);
const member3 = new Member("aaaa", "ㅁㅁㅁㅁ", 10);
let text = "";

text += member1.name;
text += member2.name;
text += member3.name;

document.getElementById("show").innerHTML = text;
```

### 12.1.1. 생성자 함수의 메서드

```js
// 생성자 함수의 객체 생성 예시
// 생성자 함수 Member는 세 개의 매개변수 id, name, age를 가진다.
function Member(id, name, age) {
  // 키워드 this는 생성자 함수로 생성되는 객체 자신을 의미
  // 따라서 this.id는 객체 자신의 프로퍼티 id를 의미
  this.id = id;
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `나의 이름은 ${this.name}입니다.`;
  };
}

const member1 = new Member("kdhong", "홍길동", 30);
const member2 = new Member("ssss", "ㄴㄴㄴㄴ", 20);
const member3 = new Member("aaaa", "ㅁㅁㅁㅁ", 10);
let text = "";

text += `${member1.name} <br/>`;
text += `${member2.name} <br/>`;
text += `${member3.name} <br/>`;
text += `${member1.getName()}`;

document.getElementById("show").innerHTML = text;
```

## 12.2. 프로토 타입

- 나중에,,,, to be continue

## 12.3. 클래스

- 나중에,,,, to be continue

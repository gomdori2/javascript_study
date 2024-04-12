## 11.1. 객체 생성

- 데이터(객체)에 접근해서 어떻게 값을 가지고올래?

- 객체(object)는 프로퍼티(property)와 메서드(method[함수])의 집합이다.

- 객체의 프로퍼티는 변수와 같은 개념
- 객체의 메서드는 함수와 거의 동일한 것.
- 특정 객체에 소속된 변수와 함수를 그 객체의 프로퍼티와 메서드라고 부른다.
- 자바스크립트에서 객체는 아주 중요한 개념이다.
- 함수(function), 배열(array), 날짜(date), 수학(math)... 모든것이 객체
- 자바스크립트의 숫자(number), 문자열(string)도 일종의 객체

```js
// 1. 객체 member
// 객체를 생성할 때는 일반적으로 키워드 const 사용
// _id > id만으로 표현하면 안좋음.
const member = {
  // member 객체는 id, username, age 세 개의 프로퍼티로 구성
  // 프로퍼티에 id, username, age를 키(key)라고 부르고
  // 이에 대응되는 "kdhong","홍길동",30을 값(value)라고 부른다.
  // key : value
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

let text;
text = `${member.id}  ${member.username} ${member.age}`;
// console.log("member object", text);
document.getElementById("show").innerHTML = text;
```

## 11.2 프로퍼티

- 객체는 프로퍼티와 메서드로 구성

### 11.2.1. for in 문으로 읽기

```js
// 1. 객체 member
// 객체를 생성할 때는 일반적으로 키워드 const 사용
// _id > id만으로 표현하면 안좋음.
const member = {
  // member 객체는 id, username, age 세 개의 프로퍼티로 구성
  // 프로퍼티에 id, username, age를 키(key)라고 부르고
  // 이에 대응되는 "kdhong","홍길동",30을 값(value)라고 부른다.
  // key : value
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

let text = "";

// for in 문에서 a 는 객체 member에 존재하는 프로퍼티를 가진다.
// 따라서 반복 루프에서 변수 x의 값은 id, name, age가 된다.
// key값(id, name, age)에 접근됨
for (a in member) {
  text += member[a];
}
console.log(text);
```

### 11.2.2. 프로퍼티 추가 방법

```js
member.email = "aa@bb.com";
```

### 11.2.3. 프로퍼티 삭제하는법

- 얕은 복사
  - 원본 훼손 x

```js
delete member.id;
```

### 11.2.4. 중첩 객체

- 객체내부에 객체가 많아질 경우 따로 객체파라.

```js
text = member.hobby.hobby1;
```

### 11.3. 메서드

```js

```

### 11.3.1. 메서드 란?

- 객체는 프로퍼티와 메서드로 구성된다.
- 프로퍼티는 객체에 소속된 변수
- 메서드는 객체에 소속된 함수
- 다르게 말하자면 프로퍼티는 객체의 상태 의미하는 것이고
- 메서드는 객체의 동작을 정의한다라고 할 수 있다.

```js
// 객체
const dog = {
  name: "댕댕이",
  species: "믹스",
  color: "흰색",
  age: 3,
  intro: function () {
    // arrow 함수로 표현할 시 this가 window를 잡는다.
    // function 을 줬을 시 상위 객체를 잡음.
    console.log(this);
    return `우리집 강아지 이름은 ${this.name} 입니다.`;
  },
};

document.getElementById("show").innerHTML = dog.intro();
```

### 11.3.2. 메서드 추가하기.

```js
// 객체
const dog = {
  name: "댕댕이",
  species: "믹스",
  color: "흰색",
  age: 3,
  intro: function (a) {
    // arrow 함수로 표현할 시 this가 window를 잡는다.
    // function 을 줬을 시 상위 객체를 잡음.
    console.log(this);
    return `우리집 강아지 이름은 ${this.name}입니다.`;
  },
};

dog.getAge = function () {
  return `나이는 ${this.age}살 입니다.`;
};
document.getElementById("show").innerHTML = dog.getAge();
```

### 11.3.3. 내장 메서드

- 자바스크립트 자체적으로 만들어 준 내장객체(built-in object)
- 이 내장 객체들은 내장 메서드를 제공함으로써
  객체에 관련된 프로그래밍을 할 수 있게 해준다.
- 많이 사용되는 객체에는 number, string, array, date, math 등이 있다.

```js

```

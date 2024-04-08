# 2. variable(변수)

- 데이터가 컴퓨터 메모리에 저장되는 주소

# 2.1 변수 선언

- var, let, const
-
-
- const : 우리는 무조건 이거씀
  - 바꿀수없는값.
    - react에선 const도 값을 바꿀 수 있다.
    - 상수 때문에 오류가 날 시 : let을 쓰자.
- const를 주로 사용하고 안되면 let으로 바꾸자.
- 순서로 읽는다.
  : html > css > js
- body 아래에 선언<script>
- head 아래에 선언- 아직은 x

# 오류

- Assignment to constant variable
  - const 선언 후 할당 된 값 변경하려 할 때 오류

```js
let keyword = "키워드 let으로 변수 keyword을 선언";

console.log("1" + ". " + keyword);
// 필요에 따라 값을 재할당 할 수 있다.
keyword = "변수 keyword에 홍길동 저장 keyword은 홍길동 값을 가짐";
console.log("2" + ". " + keyword);
```

## 2.2 변수 이름 짓기

- 변수 이름에는 영어, 숫자, 밑줄, $ 다 사용은 가능함.

- **숫자로 시작하면 안됨.**
- 대소문자 구분
- 일반적으로 카멜케이스 사용
- 변수이름
- ex)

```js
const a = 5;
const font1 = "돋움";
const _prics = 3000;
const maxWidth = 600;
const max_width = 800;
```

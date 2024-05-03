# 15. 이벤트

- 이벤트란?
- 웹 페이지에서 발생하는 사건을 의미
- 이벤트를 처리하는 함수를 event handler 또는 event listner 라고 한다.

## 15.1. 이벤트 핸들러

- 마우스 클릭이나 이동

```html
<button onclick="change(this)">클릭 ㄱㄱ</button>
```

```js
const elem = document.createElement("p");
const elem2 = document.createTextNode("야옹");
function change(elem) {
  elem.innerHTML = `OK`;
}
change();
```

- 페이지 load
- 이미지 로드
- 입력창에 데이터 입력
- 키보드 누르기 등
- copy & paste

### 15.1.1. 인라인 모델

```html
<button onclick="document.getElementById('show').innerHTML = Date()">
  현재시간은?
</button>
<p id="show"></p>
```

### 15.1.2. 이벤트 리스너

- 이벤트가 발생하길 기다렸다가 이벤트 발생 시 해당 이벤트를 처리

```html
<button id="btn" onclick="">우우우</button>
<p id="show"></p>
```

```js
let text = "";
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  text += "안녕하세영!<br/>";
  document.getElementById("show").innerHTML = text;
  btn.innerHTML = "와아아아아";
});

btn.addEventListener("click", () => {
  text += "반갑습니다!<br/>";
  document.getElementById("show").innerHTML = text;
  btn.innerHTML = "와아아아아";
});
```

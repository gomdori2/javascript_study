`컨테스트 api?`

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

### 15.2. 마우스 이벤트

- 마우스에 관련된 이벤트는 웹에서 가장 많이 사용된다.

- onclick : 사용자가 요소를 클릭 했을 때
- ondblclick : 사용자가 요소를 더블 클릭 했을 때
- onmouseover : 마우스 포인터가 요소 위에 올라갔을 때
  - 자식요소에 대해서도 동작
- onmouseout : 마우스 포인터가 요소에서 벗어날때
  - 자식요소에 대해서도 동작
- onmouseenter : 마우스 포인터가 요소에 안으로 들어갔을때
  - 자식요소에 동작 하지않음
- onmouseleave : 마우스 포인터가 요소에서 외부로 나갈 때
  - 자식요소에 동작 하지않음
- onmousemove : 마우스 포인터가 요소안에서 움직일 때

### 15.2.1. onclick/ondblclick 이벤트

```html
<button id="btn" onclick="showMessage1()">클릭</button>
<button id="dbBtn" ondblclick="showMessage2()">더블클릭</button>
<p id="show"></p>
```

```js
const show = document.getElementById("show");

function showMessage1() {
  show.innerHTML = "클릭";
}
function showMessage2() {
  show.innerHTML = "클릭 두번";
}
```

### 15.2.2. onmouseover/onmouseout 이벤트

- 버블링이 있어서 자식요소까지 이벤트가 전파됨

```html
<button id="btn" onmouseover="changeBg1(this)" onmouseout="changeBg2(this)">
  마우스를 올려보세요.
</button>
<p id="show"></p>
```

```js
const show = document.getElementById("show");

function changeBg1(btn) {
  btn.style.backgroundColor = "pink";
}
function changeBg2(btn) {
  btn.style.backgroundColor = "blue";
}
```

### 15.2.3. onmouseenter 이벤트

- onmouseover 이벤트와 유사한 기능
- 자식요소에 들어가도 이벤트 작동 안함.

```html
<style>
  div#box1 {
    border: solid 4px red;
  }
  div#box2 {
    border: solid 4px blue;
  }
  p {
    border: solid 1px #000;
  }
</style>
<div id="box1" onmouseenter="increaseX()">
  <p>단락1</p>
  <span id="show1"></span>
</div>
<div id="box2" onmouseover="increaseY()">
  <p>단락2</p>
  <span id="show2"></span>
</div>
```

```js
const show = document.getElementById("show");
let x = 0;
let y = 0;
function increaseX() {
  document.getElementById("show1").innerHTML = x++;
}
function increaseY() {
  document.getElementById("show2").innerHTML = y++;
}
```

### 15.2.4. onmouseleave 이벤트

- onmouseout 이벤트와 유사한 기능
- 자식요소에서 나가면 다른요소로 인식해서 이벤트 작동.

```html
<div id="box1" onmouseleave="increaseX()">
  <p>단락1</p>
  <span id="show1"></span>
</div>
<div id="box2" onmouseout="increaseY()">
  <p>단락2</p>
  <span id="show2"></span>
</div>
```

```js

```

### 15.2.4. onmousemove 이벤트

- 요소 내에서 마우스가 이동할 때 발생

```html
<style>
  div#box {
    border: solid 4px red;
    width: 300px;
    height: 200px;
  }
</style>
<div id="box" onmousemove="showCoord(event)">
  <p id="show"></p>
</div>
```

```js
const show = document.getElementById("show");
function showCoord(e) {
  let text = "좌표 : (" + e.clientX + "," + e.clientY + ")";
  document.getElementById("show").innerHTML = text;
}
```

### 15.3. 포커스 이벤트

- 사용처 : 필수값 입력이 안되어 있을 시

- onfocus : 요소가 포커스를 얻었을 때
  - 텍스트나 비밀번호 입력창 안에 마우스를 클릭하면 마우스 커서가 깜빡인다.
    - 이런 상태를 포커스를 얻었다.
- onblur : 요소가 포커스를 잃었을 때
  - 입력창 외부를 클릭하면 포커스를 잃게 된다.

```html
<input type="text" id="uId" /><br />
<input type="password" id="uPw" />
```

```js
const userId = document.getElementById("uId");
const userPw = document.getElementById("uPw");
function changeBgColor1(tag, color) {
  tag.style.backgroundColor = color;
}
function changeBgColor2(tag, color) {
  tag.style.background = color;
}

userId.onfocus = function () {
  changeBgColor1(userId, "yellow");
};

userId.onblur = function () {
  changeBgColor2(userId, "gray");
};

userPw.onfocus = function () {
  changeBgColor1(userPw, "blue");
};

userPw.onblur = function () {
  changeBgColor2(userPw, "red");
};
```

## 15.4. 기타 이벤트

### 15.4.1. onchange 이벤트

```html
<label for="sz">
  사이즈:
  <select name="size" id="sz">
    <option value="">선택</option>
    <option value="small">S</option>
    <option value="midium">M</option>
    <option value="large">L</option>
    <option value="xlarge">XL</option>
  </select>
</label>
<p id="show">사이즈를 선택해주세요.</p>
```

```js
const szSelect = document.getElementById("sz");
// this 조심해라.
szSelect.addEventListener("change", (e) => {
  const show = document.getElementById("show");
  show.innerHTML = `선택한 사이즈는 : ${e.target.value} 입니다.`;
  // switch 문으로 바꿀것.
  if (e.target.value === "small") {
    show.style.backgroundColor = "red";
  } else if (e.target.value === "midium") {
    show.style.backgroundColor = "green";
  } else if (e.target.value === "large") {
    show.style.backgroundColor = "blue";
  } else if (e.target.value === "xlarge") {
    show.style.backgroundColor = "yellow";
  } else {
    show.innerHTML = `사이즈를 선택해주세요.`;
    show.style.backgroundColor = "";
  }
});
```

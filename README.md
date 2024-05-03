# 14. 문서 객체 모델 DOM(document object model)

- HTML 문서의 구조화된 표현
- DOM 구조에 접근하여 HTML 문서의 구조, 스타일, 내용 등을 변경
- DOM은 웹 페이지,
  - 즉 HTML 문서에 접근하여 문서를 읽고 조작할 수 있는 API(Application Programing Interface)를 제공하는 인터페이스라고 할 수 있다
- DOM은 js와 독립적인 구조를 가지고 있다.

## 14.1. DOM의 구조

- HTML요소(element), 속성(attribute), 내용(content) 등으로 구성된 트리구조
- 웹 페이지 요소들과 요소들에 관련된 정보를 트리 형태로 가지고 있다.
- 모든 HTML 요소들은 객체로 정의 된다.
- 자바스크립트에서는 DOM에서 제공하는 메서드(method)와 프로퍼티[ex)innerHTML]를 통하여 HTML 요소들에 접근하거나 요소들을 수정 할 수 있다.

## 14.2. DOM 메서드와 프로퍼티

```js
// 웹 페이지 있는 <p> 요소의 내용 변경
// Document 객체의 getElementById("show")는 웹 페이지에서 아이디 "show"
// 즉, <p> 요소를 가져온다.
// innerHTML 에 "안녕!" 을 설정함으로써
// 단락 p 의 내용을 "안녕!" 으로 변경
// DOM method : getElementById()
// DOM property : innerHTML
document.getElementById("show").innerHTML = "안녕!";

// 문서가 로드될 때 글 제목 요소 h1을 생성하는 예
// 1. window 객체의 onload() 메서드는
// 자바스크립트 문서가 로드 될 때 자동으로 호출

window.onload = function () {
  // 2. h1 요소를 생성하여 변수 element에 저장
  let element = document.createElement("h1");
  // 3. "글 제목"이란 텍스트 노드를 생성하여 변수 text에 저장
  let text = document.createTextNode("글 제목");
  // 4. element 요소가 가리키는 h1 요소에 text, 즉 "글 제목"을 추가
  element.appendChild(text);
  // 5. Document 객체의 body 요소에 element를 추가
  document.body.appendChild(element);
};
```

## 14.3. Document 객체

- DOM의 Document 객체는 웹 페이지에 있는 모든 객체들의 소유주
- 웹 페이지에 있는 요소들에 접근하기 위해 Document객체로 부터
  시작해서 해당 요소를 찾아간다.
  - react에는 DOM은 없고 가상 DOM이 있음

```html
<body>
  <form name="form1">
    이름 : <input type="text" name="name" /><br />
    <button onclick="get_name()">버튼</button>
  </form>
  <script src="./js/dom.js"></script>
</body>
```

```js
function get_name() {
  let text = document.form1.name.value;
  alert(text);
}
```

## 14.4. HTML 요소 선택

- 자바스크립트에서 웹페이지에 있는 HTML 요소를 추가, 수정, 삭제하는 방법
- 제일 먼저 페이지 내에 존재하는 해당 요소를 선택
  - 요소 선택법
    1. id 이용 > getElementById
    2. 태그이름 자체 선택 ex) body, div ...
    3. 클래스(class) 이름으로 선택 getElementByClassName 이었던거같음
    4. CSS 선택자 > querySelector
    5. 객체 콜렉션(object collection) 이용

### 14.4.1. 아이디로 요소 선택하기

- 요소의 id
- DOM이 제공하는 객체에 내장된 메서드 getElementById()를 사용.

```html
<body>
  <p id="p1">안녕하세요.</p>
  <button onclick="changeColor('red')">빨강</button>
  <button onclick="changeColor('blue')">파랑</button>
  <script src="./js/dom.js"></script>
</body>
```

```js
// 위계를 지켜야한다.
// 현재 함수명 : 소문자 > 매개변수 : 스네이크
function changeColor(new_color) {
  const elem = document.getElementById("p1");
  new_color === "red" ? (elem.innerHTML = "야옹") : (elem.innerHTML = "멍멍");
  // if (new_color === "red") {
  //   elem.innerHTML = "야옹";
  // } else if (new_color === "blue") {
  //   elem.innerHTML = "멍멍";
  // } else {
  //   elem.innerHTML = "안녕하세요";
  // }
  elem.style.color = new_color;
}
```

### 14.4.2. 태그 이름으로 요소 선택하기.

- getElementByTagName() 메서드

```html
<body>
  <!-- 
      default : div
    #parent : id지정 div
    .parent : class지정 div
      태그를 다른걸로 하려면 p#sss 이런식으로 적으면됨.
     -->
  <div id="parent">
    <p>안녕1</p>
    <p>안녕2</p>
    <p>안녕3</p>
    <p>안녕4</p>
    <p>안녕5</p>
  </div>
  <p id="show"></p>

  <script src="./js/dom.js"></script>
</body>
```

```js
const parent = document.getElementById("parent");

const p = parent.getElementsByTagName("p");

p[2].style.color = "red";
```

### 14.4.3. 클래스 이름으로 요소 선택하기

- getElementsByClassName()
-

```html
<div id="parent">
  <p>안녕1</p>
  <p>안녕2</p>
  <p class="a">안녕3</p>
  <p class="a">안녕4</p>
  <p class="a">안녕5</p>
</div>
<p id="show"></p>
```

```js
const parent = document.getElementById("parent");

const p = parent.getElementsByClassName("a");

for (let i = 0; i < p.length; i++) {
  p[i].style.color = "red";
}
```

### 14.4.4. CSS 선택자로 요소 선택하기

- querySelector()

```js
// querySelector() 메서드는 CSS 선택자가 선택한 요소 중 첫 번째 요소 반환
const x = document.querySelector("p.a");

x.style.backgroundColor = "pink";
```

- querySelectorAll()

```html
<div id="parent">
  <h1 id="title">안녕1</h1>
  <p>단락1</p>
  <ul>
    <li class="item">항목1</li>
    <li class="item">항목2</li>
    <li class="item">항목3</li>
  </ul>
</div>
```

```js
// h1태그에 id 타이틀 > id 구분해줄때 #id명
const s = document.querySelectorAll("h1#title");
const y = document.querySelectorAll("p");
const z = document.querySelectorAll("li.item");

// 무조건 배열로 잡힘.
s[0].style.backgroundColor = "red";
y[0].style.backgroundColor = "green";
z[1].style.backgroundColor = "blue";
```

### 객체 콜렉션(object collection) 이용

- DOM 객체 이용해서 한거 위에 있음.
- 약간 개념적인 내용인거 같음.

## 14.5 HTML 요소 내용과 속성

### 14.5.1. 요소 내용 가져오기

- 자바스크립트에서 HTML 요소의 내용을 가져오는 데는
- innerHTML
- innerText

```js
// innerText / innerHTML 차이점
const x = document.getElementById("p1");
// 태그 자체를 가져옴
alert(x.innerHTML);
// 태그 안에 텍스트를 가져옴
alert(x.innerText);
```

### 14.5.2. 요소 내용 설정하기

```html
<ul>
  <li>항목1</li>
  <li>항목2</li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

```js
const x = document.querySelectorAll("li");

// 탬플릿
x[2].innerHTML = `<span style="color:red;">텍스트1</span>`;

x[3].innerHTML = "텍스트2";

x[4].innerText = "텍스트3";
```

### 14.5.3. 요소 속성 값 변경하기

- HTML 요소의 속성 (attribute)

```html
<img id="img" src="" alt="기본이미지" />
<button onclick="changeImg()">이미지 변경</button>
<button onclick="changeSize()">이미지 사이즈 변경</button>
```

```js
let num = 0;
function changeImg() {
  // 따로 예외 처리안함.
  num++;
  document.getElementById("img").src = `./images/image-${num}.png`;
}
function changeSize() {
  document.getElementById("img").width = "50";
}
```

- j-query 버전

```js
function changeImg() {
  $("#image").attr("src", "images/image-5.png");
}

// 이미지 크기 변경 함수
function changeSize() {
  $("#image").css("width", "50px");
}
```

```html
<!-- cdn -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<img id="img" src="" alt="기본이미지" />
<button onclick="changeImg()">이미지 변경</button>
<button onclick="changeSize()">이미지 사이즈 변경</button>
```

## 14.6. Document 객체의 프로퍼티

- forms
- links
- images

### 14.6.1. URL 프로퍼티

- URL : HTML 문서의 URL을 반환

```js
document.getElementById("show").innerHTML = document.URL;
```

### 14.6.2. title 프로퍼티

- title : HTML 문서의 제목을 설정하거나 반환 (웹 탭에 나오는 명)

```js
document.getElementById("show").innerHTML = document.title;
document.title = "야옹";
```

### 14.6.3. forms 프로퍼티

```html
<!-- 개발자적인 사고(로직을 생각하자)를 할 수 있게 하자. 그래야 GPT가 해준다. -->
<!-- button의 타입을 button으로 지정해줘야 submit으로 인한 load가 안된다. -->
<form id="form1" onsubmit="false">
  아이디 : <input type="text" name="uid" /><br />
  이름 : <input type="text" name="name" /><br />
  비밀번호 : <input type="password" name="upw" /><br />
  <button type="button" onclick="getInfo()">확인</button>
</form>
<p id="show"></p>
```

```js
function getInfo(e) {
  const info = document.forms["form1"];
  let text = "";
  for (let i = 0; i < info.length; i++) {
    text += info.elements[i].value + "<br />";
  }
  document.getElementById("show").innerHTML = text;
}
// 혹시나 this 쓸까봐 만들어놓음.
// const getInfo2 = function () {};
```

### 14.6.4. links 프로퍼티

- 속성들을 말함
  - a태그의 href

### 14.6.5. images 프로퍼티

- 속성들을 말함
  - img 태그의 src 등등

## 14.7. DOM 노드

- DOM 트리의 가장 기본이 되는 `HTML 요소, 속성, 텍스트` 등은 모두 node라 함
  - tree구조 요소(element)로 구성되어있다.
  - 요소 뿐만 아니라 속성! 텍스트!까지

### 14.7.1. 노드의 종류

- 계층 구조를 잘 잡자.
  - 노드들은 부모 노드가 무조건 1개이다.
  - 부모 노드 위는 조상 노드이다.
  - 그러나 루트는 부모 노드가 없음.
  - root node 를 포함한 모든 node는 하나 또는 여러 개의 자식 노드를 가질 수 있다.
- 노드 종류
  - 요소노드(element node)
  - 속성노드(attibute node)
  - 텍스트 노드(text node)
  - 문서 노드(document node)
  - 주석 노드(comment node)
  - 루트 노드(root node)
    - DOM Tree 구조의 최상위 요소

### 14.7.2. 노드 추가하기

```html
<div id="box">
  <p>단락1</p>
  <p>단락2</p>
</div>
```

```js
const elem = document.createElement("p");

const text = document.createTextNode("새로운 단락");

const box = document.getElementById("box");

// 변수로 받는디 왜 문자로 받니
// elem.appendChild("text");
// box.appendChild("elem");
elem.appendChild(text);
box.appendChild(elem);
```

### 14.7.3. 노드 삽입하기

```html
<div id="box">
  <p id="p1">단락1</p>
  <p id="p2">단락2</p>
</div>
```

```js
const elem = document.createElement("p");

const text = document.createTextNode("새로운 단락");

const p2 = document.getElementById("p2");

// 변수로 받는디 왜 문자로 받니
// elem.appendChild("text");
// box.appendChild("elem");
elem.append(text);

document.getElementById("box").insertBefore(elem, p2);
```

### 14.7.4. 노드 삭제하기

```js
const elem = document.getElementById("p2");

elem.remove();
```

### 14.7.5. 노드 변경하기

```js
const elem = document.createElement("p");

const text = document.createTextNode("변경한 단락");

elem.appendChild(text);
const p1 = document.getElementById("p1");
// replaceChild(바꾼거, 바꿀친구) = replaceChild(elem, p1)
document.getElementById("box").replaceChild(elem, p1);
```

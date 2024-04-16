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

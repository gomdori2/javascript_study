// dom 웹문서
// element html 태그 일 경우 스네이크로 자주씀
//
const checkInput = () => {
  let input_elem = document.getElementById("input1");
  let a = input_elem.value;
  document.getElementById("show").innerHTML = "";
  // isNaN() NaN 체크 해줌.
  try {
    if (a === "") {
      throw "비어있다.";
    }
    if (isNaN(a)) {
      throw "숫자가 아닙니다.";
    }
    a = Number(a);
    if (a < 0 || a > 9) {
      throw "0~9 사이 숫자가 아닙니다.";
    }
  } catch (error) {
    document.getElementById("show").innerHTML = `오류 : ${error}`;
  } finally {
    input_elem.value = "";
  }
};

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

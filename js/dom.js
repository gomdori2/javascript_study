let num = 0;
function changeImg() {
  // 따로 예외 처리안함.
  num++;
  document.getElementById("img").src = `./images/image-${num}.png`;
}
function changeSize() {
  document.getElementById("img").width = "50";
}

const show = document.getElementById("show");
function showCoord(e) {
  let text = "좌표 : (" + e.clientX + "," + e.clientY + ")";
  document.getElementById("show").innerHTML = text;
}

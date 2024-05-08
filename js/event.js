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

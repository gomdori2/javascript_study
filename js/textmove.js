// 사용자가 클릭을 한다거나의 이벤트 시.
document.addEventListener("scroll", function () {
  const scrollAmount = window.scrollY;
  const textTop = document.getElementById("textTop");
  const textBottom = document.getElementById("textBottom");

  textTop.style.transform = `translateX(${scrollAmount * 0.5}px)`;
  textBottom.style.transform = `translateX(-${scrollAmount * 0.5}px)`;
});

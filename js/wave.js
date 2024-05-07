document.addEventListener("mousemove", function (e) {
  let ripple = document.createElement("div");
  ripple.className = "ripple";
  document.body.appendChild(ripple);
  // 이벤트 마우스 좌표값 잡아주는거.
  ripple.style.left = `${e.clientX - 80}px`;
  ripple.style.top = `${e.clientY - 80}px`;
  ripple.addEventListener("animationend", () => {
    ripple.parentElement.removeChild(ripple);
  });
});

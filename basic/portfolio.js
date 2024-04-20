const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector(".navbar_div");
const darkmode_btn = document.querySelector("#darkmode_btn");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

darkmode_btn.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("darkmode");

  const lightIcon = document.querySelector(".light-icon");
  const darkIcon = document.querySelector(".dark-icon");

  if (body.classList.contains("darkmode")) {
    // 다크 모드일 때
    lightIcon.style.display = "inline";
    darkIcon.style.display = "none";
  } else {
    // 라이트 모드일 때
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline";
  }
});

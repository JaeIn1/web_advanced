const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector(".navbar_div");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

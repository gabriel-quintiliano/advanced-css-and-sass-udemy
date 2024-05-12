const sidebar = document.querySelector(".sidebar");
const sidebarToggleBtn = document.querySelector(".sidebar__toggle-btn");

sidebarToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--opened");
})

const body = document.querySelector("body");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  if (body.hasAttribute("dark-mode")) {
    body.removeAttribute("dark-mode");
  } else {
    body.setAttribute("dark-mode", "");
  }
  
})
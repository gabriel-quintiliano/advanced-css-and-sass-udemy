const sidebar = document.querySelector(".sidebar");
const sidebarToggleBtn = document.querySelector(".sidebar__toggle-btn");

sidebarToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--opened");
})
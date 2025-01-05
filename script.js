const menuToggle = document.getElementById("menuToggle");
const menuContent = document.getElementById("menuContent");

menuToggle.addEventListener("click", () => {
  menuContent.classList.toggle("active");
});
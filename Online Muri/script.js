const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const navItems = document.getElementById("nav-items");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  navItems.style.display = "flex";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  navItems.style.display = "none";
  openMenu.style.display = "block";
});

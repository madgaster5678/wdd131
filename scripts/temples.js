const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
menuButton.addEventListener("click", () => {menu.classList.toggle("menu-hidden") 
    if (menu.classList.contains("menu-hidden")) {
    menuButton.textContent = "☰";
} else {
    menuButton.textContent = "✕";
}});

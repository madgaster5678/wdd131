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

let communityCount = localStorage.getItem("communityCount");
if (communityCount === null) {
    communityCount = 0;
}


const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const submissionCounted = localStorage.getItem("submissionCounted");
if (name  && submissionCounted !== name) {
    communityCount++;
    localStorage.setItem("submissionCounted", name);
}
localStorage.setItem("communityCount", communityCount);
const communityDisplay = document.getElementById("community-count");

if (communityDisplay) {
    communityDisplay.textContent = `We currently have ${communityCount} members with us.`;
}
const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified
let reviewCount = localStorage.getItem("reviewCount");
if (reviewCount == null) {
    reviewCount = 0;
}
reviewCount = parseInt(reviewCount);
reviewCount += 1;
localStorage.setItem("reviewCount", reviewCount);
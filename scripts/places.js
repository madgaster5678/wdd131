const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified
const temp = 5;
const windSpeed = 10;
function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * (windSpeed**0.16) + 0.3965 * temp * (windSpeed**0.16);
}
if (temp <= 10 && windSpeed > 4.8) {
    document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed).toFixed(1);
} else {
    document.getElementById("wind-chill").textContent = "N/A";
}
let count = 0;
const countDisplay = document.getElementById("count-value");
const btnCong = document.getElementById("btn-cong");

btnCong.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
});
const amount = document.getElementById("amount");
const percentage = document.getElementById("percentage");
const numberOfDays = document.getElementById("number-of-days");
const btn = document.querySelector(".button");
let annualProfit = 0;
let dailyProfit = 0;
let monthlyProfit = 0;
btn.addEventListener("click", function (e) {
    e.preventDefault();
    annualProfit = Math.round((amount.value * percentage.value) / 100);
    dailyProfit = Math.round((amount.value * percentage.value) / 36500);
    monthlyProfit = Math.round(dailyProfit * numberOfDays.value);
    alertFunction();
});
const formatNumber = (num) => {
    return Number(num).toLocaleString("fa-IR");
};
const alertFunction = () => {
    const alert = document.querySelector(".alert");
    const deposit = document.getElementById("deposit");
    const annualProfitPercentage = document.getElementById("annual-profit-percentage");
    const dailyProfitAlert = document.getElementById("daily-profit");
    const monthlyProfitAlert = document.getElementById("monthly-profit");
    const annualProfitAlert = document.getElementById("annual-profit");
    const form = document.querySelector("form");
    deposit.innerText = formatNumber(amount.value);
    annualProfitPercentage.innerText = formatNumber(percentage.value);
    dailyProfitAlert.innerText = formatNumber(dailyProfit);
    monthlyProfitAlert.innerText = formatNumber(monthlyProfit);
    annualProfitAlert.innerText = formatNumber(annualProfit);
    alert.classList.add("show");
    form.style.opacity = "0.2";
    closeFunction();
};
const closeFunction = () => {
    const allElements = document.querySelector("body :not(.close-container)");
    allElements.addEventListener("click", function () {
        location.reload()
    })
};

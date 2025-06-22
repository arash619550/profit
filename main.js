const amount = document.getElementById("amount");
const percentage = document.getElementById("percentage");
const numberOfDays = document.getElementById("number-of-days");
const btn = document.querySelector(".button");
let annualProfit;
let dailyProfit;
let monthlyProfit;
btn.addEventListener("click", function (e) {
    e.preventDefault();
    annualProfit = Math.round((amount.value * percentage.value) / 100);
    dailyProfit = Math.round((amount.value * percentage.value) / 36500);
    monthlyProfit = Math.round(dailyProfit * numberOfDays.value);
    console.log(annualProfit, monthlyProfit, dailyProfit)
})
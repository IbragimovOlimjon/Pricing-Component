const elBasic = document.querySelector(".main-info-dollar-number-one");
const elProf = document.querySelector(".main-info-dollar-number-two");
const elMaster = document.querySelector(".main-info-dollar-number-three");

const elAnnually = document.querySelector(".switch-label-annual");
const elMonthly = document.querySelector(".switch-label-monthly");

const elAnnuallyLabel = document.querySelector(".switch-annual");
const elMonthlyLabel = document.querySelector(".switch-monthly");

elMonthly.addEventListener("click", function() {
    elBasic.textContent = "19.99"
    elProf.textContent = "24.99"
    elMaster.textContent = "39.99"
})

elAnnually.addEventListener("click", function() {
    elBasic.textContent = "199.99"
    elProf.textContent = "249.99"
    elMaster.textContent = "399.99"
})

elMonthlyLabel.addEventListener("click", function() {
    elBasic.textContent = "19.99"
    elProf.textContent = "24.99"
    elMaster.textContent = "39.99"
})

elAnnuallyLabel.addEventListener("click", function() {
    elBasic.textContent = "199.99"
    elProf.textContent = "249.99"
    elMaster.textContent = "399.99"
})
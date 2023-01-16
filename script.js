let rates = document.querySelectorAll(".ratebtn");
let selectedRate = document.getElementById("rating");
let main_container = document.querySelector(".main-container");
let thanks = document.querySelector(".thanks");
let submit = document.querySelector(".submitbtn");

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        let ratingSelected = 0;
        selectedRate.innerHTML = rate.innerHTML;
        ratingSelected = rate.innerHTML;
        
if(ratingSelected != "0") {
    submit.addEventListener("click", () => {
        main_container.style.display = "none";
        thanks.classList.remove("hidden");
    });
}
    })
});


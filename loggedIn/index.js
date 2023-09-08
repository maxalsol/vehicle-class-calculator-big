const mobileMenuButton = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
mobileMenuButton.addEventListener("click", () => {
    navList.classList.toggle("nav-toggle");
});

const accountButton = document.getElementById("acc-btn");
accountButton.addEventListener("click", (evt) => {
    evt.preventDefault();
});

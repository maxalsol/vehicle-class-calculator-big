const mobileMenuButton = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
mobileMenuButton.addEventListener("click", () => {
    navList.classList.toggle("nav-toggle");
});

const accountButton = document.getElementById("acc-btn");
const accountDropdown = document.querySelector(".dropdown-content");
accountButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    // accountDropdown.classList.toggle("nav-toggle");
});

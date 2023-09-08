// hamburger menu button
const mobileMenuButton = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenuButton.addEventListener("click", () => {
    navList.classList.toggle("nav-toggle");
});

// login
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const error = document.getElementById("error");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "1234") {
            error.textContent = "Login successful!";
            error.style.color = "green";
            // Redirect or perform some action here
        } else {
            error.textContent = "Invalid username or password!";
            error.style.color = "red";
        }
    });
});

// register
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const error = document.getElementById("error");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (emailRegex.test(email) && passwordRegex.test(password)) {
            error.textContent = "Registration successful!";
            error.style.color = "green";
            // Redirect or perform some action here
        } else {
            error.textContent =
                "Invalid email or password does not meet complexity requirements!";
            error.style.color = "red";
        }
    });
});

// forgot password
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const error = document.getElementById("error");
    const forgotPassword = document.getElementById("forgotPassword");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "1234") {
            error.textContent = "Login successful!";
            error.style.color = "green";
            // Redirect or perform some action here
        } else {
            error.textContent = "Invalid username or password!";
            error.style.color = "red";
        }
    });

    forgotPassword.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "password-reset.html"; // Redirect to login page
    });
});

// password reset
document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const error = document.getElementById("error");
    const backToLogin = document.getElementById("backToLogin");

    forgotPasswordForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;

        // Simulate email validation; replace with your real validation
        if (email.includes("@")) {
            error.textContent = "Reset instructions sent to email!";
            error.style.color = "green";
            // Normally, you'd send a request to your server here
        } else {
            error.textContent = "Invalid email address!";
            error.style.color = "red";
        }
    });

    backToLogin.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "login.html"; // Redirect to login page
    });
});

// not a member yet
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const error = document.getElementById("error");
    const forgotPassword = document.getElementById("forgotPassword");
    const notMemberYet = document.getElementById("notMemberYet");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // ... (your existing login validation code)
    });

    forgotPassword.addEventListener("click", function (e) {
        e.preventDefault();
        // ... (your existing forgot password code)
    });

    notMemberYet.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "register.html"; // Redirect to registration page
    });
});

// already a member
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const error = document.getElementById("error");
    const alreadyMember = document.getElementById("alreadyMember");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // ... (your existing registration validation code)
    });

    alreadyMember.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "login.html"; // Redirect to login page
    });
});

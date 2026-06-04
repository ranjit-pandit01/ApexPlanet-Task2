document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. LOGIN FORM VALIDATION & SHOW/HIDE PASSWORD ---
    const loginForm = document.getElementById("loginForm");
    const toggleLoginPassword = document.getElementById("toggleLoginPassword");
    const loginPassword = document.getElementById("loginPassword");

    // Password Show/Hide Toggle
    toggleLoginPassword.addEventListener("click", function () {
        if (loginPassword.type === "password") {
            loginPassword.type = "text";
            this.classList.remove("bi-eye-slash");
            this.classList.add("bi-eye");
        } else {
            loginPassword.type = "password";
            this.classList.remove("bi-eye");
            this.classList.add("bi-eye-slash");
        }
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        const email = document.getElementById("loginEmail").value.trim();
        const pass = document.getElementById("loginPassword").value.trim();

        // Email Check
        if (email === "") {
            document.getElementById("loginEmailError").innerText = "Email is required!";
            isValid = false;
        } else {
            document.getElementById("loginEmailError").innerText = "";
        }

        // Password Check
        if (pass === "") {
            document.getElementById("loginPassError").innerText = "Password is required!";
            isValid = false;
        } else {
            document.getElementById("loginPassError").innerText = "";
        }

        if (isValid) {
            alert("Login Successful! (Frontend Demo)");
        }
    });


    // --- 2. REGISTER FORM VALIDATION & DUMMY AJAX ---
    const registerForm = document.getElementById("registerForm");
    const usernameInput = document.getElementById("regUsername");

    // Dummy AJAX: Check if username exists (Bina page refresh kiye)
    usernameInput.addEventListener("keyup", function () {
        const username = this.value.trim().toLowerCase();
        const usernameError = document.getElementById("usernameError");

        if (username === "admin" || username === "apex") {
            usernameError.style.color = "#dc3545";
            usernameError.innerText = "⚠️ Username already exists! (Dummy AJAX Check)";
        } else if (username !== "") {
            usernameError.style.color = "#198754";
            usernameError.innerText = "✓ Username is available.";
        } else {
            usernameError.innerText = "";
        }
    });

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        const user = usernameInput.value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const pass = document.getElementById("regPassword").value.trim();
        const confirmPass = document.getElementById("regConfirmPassword").value.trim();

        // Username empty check
        if (user === "") {
            document.getElementById("usernameError").style.color = "#dc3545";
            document.getElementById("usernameError").innerText = "Username is required!";
            isValid = false;
        }

        // Email check
        if (email === "") {
            document.getElementById("regEmailError").innerText = "Email is required!";
            isValid = false;
        } else {
            document.getElementById("regEmailError").innerText = "";
        }

        // Password check
        if (pass === "") {
            document.getElementById("regPassError").innerText = "Password is required!";
            isValid = false;
        } else {
            document.getElementById("regPassError").innerText = "";
        }

        // Confirm Password Match Check
        if (confirmPass === "") {
            document.getElementById("regConfirmPassError").innerText = "Please confirm your password!";
            isValid = false;
        } else if (pass !== confirmPass) {
            document.getElementById("regConfirmPassError").innerText = "Passwords do not match!";
            isValid = false;
        } else {
            document.getElementById("regConfirmPassError").innerText = "";
        }

        if (isValid && user !== "admin" && user !== "apex") {
            alert("Registration Successful! (Frontend Demo)");
        }
    });
});

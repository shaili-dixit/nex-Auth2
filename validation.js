function showError(input, message) {
    input.closest(".input-group").querySelector(".error").innerText = message;
}

function clearError(input) {
    input.closest(".input-group").querySelector(".error").innerText = "";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* REGISTER */
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", e => {
        e.preventDefault();

        const name = regName.value.trim();
        const email = regEmail.value.trim();
        const pass = regPassword.value;
        const cpass = regConfirmPassword.value;

        let ok = true;

        if (!name) { showError(regName, "Name required"); ok = false; } else clearError(regName);
        if (!isValidEmail(email)) { showError(regEmail, "Invalid email"); ok = false; } else clearError(regEmail);
        if (pass.length < 6) { showError(regPassword, "Min 6 chars"); ok = false; } else clearError(regPassword);
        if (pass !== cpass) { showError(regConfirmPassword, "Passwords do not match"); ok = false; } else clearError(regConfirmPassword);

        if (ok) registerUser(name, email, pass);
    });
}

/* LOGIN */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const email = loginEmail.value.trim();
        const pass = loginPassword.value;

        let ok = true;

        if (!isValidEmail(email)) { showError(loginEmail, "Invalid email"); ok = false; } else clearError(loginEmail);
        if (!pass) { showError(loginPassword, "Password required"); ok = false; } else clearError(loginPassword);

        if (ok) loginUser(email, pass);
    });
}

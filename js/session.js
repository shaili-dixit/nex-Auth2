const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (location.pathname.includes("dashboard.html")) {
    if (!user) {
        location.href = "login.html";
    } else {
        document.getElementById("greeting").innerText =
            `Good evening, ${user.name}`;
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    location.href = "login.html";
}

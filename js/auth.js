function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function hashPassword(password) {
    return btoa(password);
}

function registerUser(name, email, password) {
    const users = getUsers();

    if (users.some(user => user.email === email)) {
        alert("User already exists");
        return;
    }

    users.push({
        name,
        email,
        password: hashPassword(password)
    });

    saveUsers(users);
    alert("Registration successful!");
    window.location.href = "login.html";
}

function loginUser(email, password) {
    const users = getUsers();
    const hashed = hashPassword(password);

    const user = users.find(
        u => u.email === email && u.password === hashed
    );

    if (!user) {
        alert("Invalid credentials");
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
}


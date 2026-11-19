/* =========================================================
   STUDENT PORTAL - script.js
   One file shared by all three pages. Each page is identified
   by the id on its <body> tag (login-page, register-page,
   dashboard-page), and only that page's setup function runs.
   ========================================================= */


/* ---------- 1. Storage keys ---------- */
// All registered accounts are saved in localStorage, so they survive a page refresh.
const USERS_KEY = "portalUsers";
// The logged-in user's email is saved in sessionStorage, so it is cleared when the tab closes.
const SESSION_KEY = "portalSession";


/* ---------- 2. Validation rules (regular expressions) ---------- */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;     // text@text.text
const USERNAME_PATTERN = /^[A-Za-z0-9_]{3,20}$/;         // 3 to 20 letters, numbers, or _
const STUDENT_ID_PATTERN = /^\d{2}-\d{5}$/;              // 25-00000


/* ---------- 3. Helper functions ---------- */

// Read the saved account list. If nothing is saved yet, return an empty array.
function getUsers() {
    const saved = localStorage.getItem(USERS_KEY);
    return saved ? JSON.parse(saved) : [];
}

// Save the account list. JSON.stringify turns the array into text that storage can hold.
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Show a message under the form. type is "error" or "success".
function showMessage(text, type) {
    const messageBox = document.getElementById("message");
    messageBox.textContent = text;
    messageBox.className = "message message-" + type;

    // Replay the shake animation every time an error appears.
    messageBox.classList.remove("shake");
    void messageBox.offsetWidth; // reading offsetWidth forces the browser to restart the animation
    if (type === "error") {
        messageBox.classList.add("shake");
    }
}

// Read and clean up a text field's value (removes spaces at the start and end).
function readField(id) {
    return document.getElementById(id).value.trim();
}

// Run a function when the user presses Enter inside any input field.
function submitOnEnter(callback) {
    document.querySelectorAll(".field-input").forEach(function (input) {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                callback();
            }
        });
    });
}


/* ---------- 4. LOGIN PAGE (index.html) ---------- */
function setupLoginPage() {
    document.getElementById("loginBtn").addEventListener("click", handleLogin);
    submitOnEnter(handleLogin);
}

function handleLogin() {
    const email = readField("email").toLowerCase();
    const password = document.getElementById("password").value; // passwords are not trimmed

    if (email === "" || password === "") {
        showMessage("Please enter your email and password.", "error");
        return;
    }
    if (!EMAIL_PATTERN.test(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    // find() returns the first account with this email, or undefined if none matches.
    const user = getUsers().find(function (account) {
        return account.email === email;
    });

    if (!user) {
        showMessage("No account found with that email. Please register first.", "error");
        return;
    }
    if (user.password !== password) {
        showMessage("Incorrect password. Please try again.", "error");
        return;
    }

    // Remember who is logged in, then move to the dashboard after a short pause.
    sessionStorage.setItem(SESSION_KEY, user.email);
    showMessage("Login successful! Redirecting...", "success");
    setTimeout(function () {
        window.location.href = "dashboard.html";
    }, 800);
}


/* ---------- 5. REGISTER PAGE (register.html) ---------- */
function setupRegisterPage() {
    document.getElementById("registerBtn").addEventListener("click", handleRegister);
    submitOnEnter(handleRegister);
}

function handleRegister() {
    const email = readField("email").toLowerCase();
    const username = readField("username");
    const password = document.getElementById("password").value;
    const studentId = readField("studentId");

    // Check each field in order and stop at the first problem.
    if (email === "" || username === "" || password === "" || studentId === "") {
        showMessage("Please fill in all fields.", "error");
        return;
    }
    if (!EMAIL_PATTERN.test(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }
    if (!USERNAME_PATTERN.test(username)) {
        showMessage("Username must be 3 to 20 characters: letters, numbers, or _.", "error");
        return;
    }
    if (password.length < 6) {
        showMessage("Password must be at least 6 characters.", "error");
        return;
    }
    if (!STUDENT_ID_PATTERN.test(studentId)) {
        showMessage("Student ID must follow the format 25-00000.", "error");
        return;
    }

    const users = getUsers();

    // some() returns true if at least one saved account already uses this value.
    const emailTaken = users.some(function (account) {
        return account.email === email;
    });
    if (emailTaken) {
        showMessage("This email is already registered.", "error");
        return;
    }

    const idTaken = users.some(function (account) {
        return account.studentId === studentId;
    });
    if (idTaken) {
        showMessage("This student ID is already registered.", "error");
        return;
    }

    // Add the new account to the list and save it.
    users.push({
        email: email,
        username: username,
        password: password,
        studentId: studentId
    });
    saveUsers(users);

    showMessage("Account created! Redirecting to login...", "success");
    setTimeout(function () {
        window.location.href = "index.html";
    }, 1500);
}


/* ---------- 6. DASHBOARD PAGE (dashboard.html) ---------- */
function setupDashboardPage() {
    const loggedInEmail = sessionStorage.getItem(SESSION_KEY);
    const user = getUsers().find(function (account) {
        return account.email === loggedInEmail;
    });

    // Nobody is logged in: send the visitor back to the login page.
    if (!user) {
        window.location.href = "index.html";
        return;
    }

    // Fill in the page. The password is never shown.
    // textContent (not innerHTML) treats the text as plain text, which keeps the page safe.
    document.getElementById("welcomeText").textContent = "Welcome, " + user.username + "!";
    document.getElementById("usernameValue").textContent = user.username;
    document.getElementById("studentIdValue").textContent = user.studentId;
    document.getElementById("emailValue").textContent = user.email;

    // Logout clears the session and returns to the login page.
    document.getElementById("logoutBtn").addEventListener("click", function () {
        sessionStorage.removeItem(SESSION_KEY);
        window.location.href = "index.html";
    });
}


/* ---------- 7. START THE RIGHT PAGE ---------- */
// Wait until the HTML is fully loaded before touching any element.
document.addEventListener("DOMContentLoaded", function () {
    const page = document.body.id;

    if (page === "login-page") {
        setupLoginPage();
    } else if (page === "register-page") {
        setupRegisterPage();
    } else if (page === "dashboard-page") {
        setupDashboardPage();
    }
});

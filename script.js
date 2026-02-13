// Auto login if already stored
window.onload = function() {
    if (localStorage.getItem("student")) {
        showDashboard(localStorage.getItem("student"));
    }
};

function login() {
    var roll = document.getElementById("roll").value;
    var password = document.getElementById("password").value;

    if (roll === "SNIST123" && password === "12345") {
        localStorage.setItem("student", roll);
        showDashboard(roll);
    } else {
        document.getElementById("message").innerHTML =
            "Invalid Roll Number or Password!";
    }
}

function showDashboard(name) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "flex";
    document.getElementById("studentName").innerText = name;
}

function logout() {
    localStorage.removeItem("student");
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

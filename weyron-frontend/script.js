
function login() {
    const email = document.getElementById('email').value;
    if (email === "admin@weyron.com") {
        alert("Área de admin não implementada ainda.");
    } else {
        document.getElementById('loginScreen').style.display = "none";
        document.getElementById('clientDashboard').style.display = "block";
    }
}

function showForm() {
    document.getElementById('formContainer').style.display = "block";
}

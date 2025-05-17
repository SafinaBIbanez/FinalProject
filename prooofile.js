
document.getElementById("displayFirstName").textContent = localStorage.getItem("firstName") || "(not provided)";
document.getElementById("displayLastName").textContent = localStorage.getItem("lastName") || "(not provided)";
document.getElementById("displayEmail").textContent = localStorage.getItem("email") || "(not provided)";
document.getElementById("displaySex").textContent = localStorage.getItem("sex") || "(not selected)";
document.getElementById("displayReason").textContent = localStorage.getItem("reason") || "(no reason given)";

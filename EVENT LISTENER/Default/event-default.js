console.log("Default Default");

// prevent default - prevent initial actions

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("login prevented");
});
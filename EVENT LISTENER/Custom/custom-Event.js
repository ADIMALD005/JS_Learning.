
// step 1: create a custom Event
const myEvent = new CustomEvent("userLoggedIn", {
    detail: {
        username: "AbdulMaleeq",
        role: "admin",
    },
});

// step 2: Listen to the Custom Event
document.addEventListener("userLoggedIn", (e) => {
    console.log(`User Login Detected ${e.detail.username}`)
});

// Step 3: Dispatching the custom Event
document.dispatchEvent(myEvent);


function loginUser(username) {
    const event = new CustomEvent("userLoggedIn", {
        detail: {username}
    });

    document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn", (e) => {
    const user = e.detail.username;
    document.getElementById("welcome").textContent = `Welcome ${user}`
});




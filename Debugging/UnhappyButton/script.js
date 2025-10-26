/* const user = {
    name: "Tapas",
    clicks: 0,
    handleClick: () => {
        document.getElementById("clickBtn").addEventListener("click", () => {
            this.clicks++;
            console.log(`User ${this.name} clicked ${this.clicks} times`);
        });
    }
};

user.handleClick(); */


// Correceted Form

const user = {
    name: "Tapas",
    clicks: 0,
    handleClick: function() {
        document.getElementById("clickBtn").addEventListener("click", () => {
            this.clicks++;
            console.log(`User ${this.name} clicked ${this.clicks} times`);
        });
    }
};

user.handleClick();
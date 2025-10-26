// Throttling
// - It limits how often a function can be called over time

function throttle(func, interval) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
         if (now - lastTime >= interval) {
            lastTime = now;
            func.apply(this, args);
        }
    };
}

    function handleScroll() {
        const scrollY = window.scrollY;
        document.getElementById("tracker").textContent = `Scroll Y: ${scrollY}`;
        console.log("Scroll event fired at", new Date().toLocaleDateString());
    }
    const throttledScroll = throttle(handleScroll, 400)
    window.addEventListener("scroll", throttledScroll);
// Debouncing

// - Limit the rate at which a function is executed
// - ensures that a function is only executed/called after a certain delay has
// passed since the last time it was called
 
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

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
    }
}

// Memoization
// caching
// cache the result of an expensive operation and return the cached result when
//the same output is given in the future.

// input => fn() => output.

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if(key in cache) {
            console.log("Cache hit:", key);
            return cache[key];
        } else {
            console.log("Cache miss:", key);
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    }
}

function slowSquare(n) {
    console.log("Computing square of", n);
    return n * n;
}
const memoizedSquare = memoize(slowSquare);

memoizedSquare(5);  // Cache miss
memoizedSquare(5);  // Cache hit
memoizedSquare(6);  // Cache miss
memoizedSquare(5);  // Cache hit

// Memory leak
// retains memory that are no longer needed
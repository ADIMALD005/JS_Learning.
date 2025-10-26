
// 1. Looping with Promises

const ids = ["1", "2", "3", "4"];

const fetchData = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const loopFetches = () => {
    for (let i = 0; i < ids.length; i++) {
        console.log(`*** Fetching details of ${ids[i]} ***`);
        const response = fetchData(ids[i]);

        response.then((response) => {
            response.json().then((data) => {
                console.log(
                    `
                    Id: ${data?.id}
                    Name: ${data?.name}
                    company:${data?.company?.name}
                    Address: ${data?.address?.name}
                    `
                )
            })
        })
    }
}
//loopFetches();


const loopFetchesAsync = async () => {
    for (let i = 0; i < ids.length; i++) {
        console.log(`=== Fetching details of ${ids[i]} ===`);
        const response = await fetchData(ids[i]);
        const data = await response.json();
        console.log(
            `
            Id: ${data?.id}
            Name: ${data?.name}
            company:${data?.company?.name}
            Address: ${data?.address?.city}
           `
        )
    }
}
//loopFetchesAsync();

const loopAll = async () => {
    let responses = await Promise.allSettled(ids.map((id) => fetchData(id)))
    let data = await Promise.allSettled(
        responses.map((response) => response.value.json())
    );
    console.log(responses);
    console.log(data);

    data.map((userInfo) => {
        const user = userInfo.value;
        console.log(`*** Fetching details of ${user?.id}***`);
        console.log(
            `
            Name: ${user?.name}
            company:${user?.company?.name}
            Address: ${user?.address?.city}
           `
        )
    })
}
//loopAll();


// 2. Promise Chain vs. no chain

const ten = new Promise((resolve, reject) => {
    resolve(10);
});


// Chain
ten.then((result) => {
    // return 20
    return result + 10;
})
.then((result) => {
    // returns 200
    return result * 10;
})
.then((result) => {
    // returns 190
    return result - 10;
})
.then((result) => {
    // log 190 in console
    console.log(result);
})

//No Chain
ten.then((result) => {
    // return 20
    return result + 10;
})
ten.then((result) => {
    // returns 100
    return result * 10;
})
ten.then((result) => {
    // returns 0
    return result - 10;
})
ten.then((result) => {
    // log 10 in console
    console.log(result);
})


// 3 - (Not)Handling Errors with promises

const oddEven = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("Even");
        } else {
            reject(new Error("Odd"));
        }
    })
}

oddEven(11).then((result) => {
    console.log(result);
})
.catch((err) => {
    console.error(err.message);
})


// 4. Missing a function in .then() handler

const hello = Promise.resolve("Hello");

hello.then(() => "World").then((result) => console.log(result)); // World

/* 
Promise.resolve("Hello") creates a resolved Promise with the value "Hello"
The first .then(() => "World") ignores the "Hello" value and returns a new string "World"
The second .then((result) => console.log(result)) receives "World" as result and logs it

The key point is that each .then() returns a new Promise, and when you return a value from a .then() callback,
that value becomes the resolved value for the next Promise in the chain. Since the first .then() returns "World" (not "Hello"),
that's what gets passed to and logged by the second .then(). 
*/


// 5. Using Promises for Synchronous Operations

const cache = {
    "tapas@email.com": {
        name: "Tapas Adhikary",
        org: "tapaScript",
    },
};

const getDataV1 = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFromCache = cache[email];

            if (!userFromCache) {
                // Make the call to fetch Usr data
                // updata cache
                console.log("Made the call and updated cache")
            } else {
                console.log(`User details ${JSON.stringify(userFromCache)}`)
            }
        }, 2000)
    })
}
//getDataV1("tapas@email.com");
//getDataV1("tappas@email.com");


// CORRECTED FORM

const getDataV2 = (email) => {
    const userFromCache = cache[email];
    if (userFromCache) {
        console.log(`User details ${JSON.stringify(userFromCache)}`);
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Make the call and update cache");
            }, 2000);
        });
    }
};


// 6. Using Unnecessary try-catch with promises

// Redundant try-catch
new Promise((resolve, reject) => {
    try {
        const value = getValue();
        // do something with value
        resolve(value);
    } catch (e) {
        reject(e);
    }
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Better Way
new Promise((resolve, reject) => {
    const value = getValue();
    // do something with value
    resolve(value);
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

console.log("start"); // synchronous

setTimeout(() => {
    console.log("Waiting Done");
}, 2000); // Asynchronous

console.log("End"); // Synchronous

// callback

function greet(name, callback) {
    console.log(`Hi ${name}`);
    setTimeout(() => {
        callback();
    }, 3000);
    console.log("I'm still hanging here")
}

function sayBye() {
    console.log("Bye");
}

greet("Tapas", sayBye);


const storeEl = document.getElementById("store");
const orderDetailsEl = document.getElementById("order-details");
const addOnEl = document.getElementById("add-on");
const orderEl = document.getElementById("order");

function orderPizza(type, name) {

    //Query the pizzahub for a store
    
    storeEl.textContent = `Locating Store...`;    
    query(`api/pizzahub/`, function(result, error) {
        if (!error) {
            let shopId = result[0];
            console.log(shopId); // pizzaHut
            storeEl.textContent = `Located store: ${shopId}`

            // Get the store and query pizzas

            orderDetailsEl.textContent = `loading Order...`;
            query(`api/pizzahub/pizzas/${shopId}`, function(result, error) {
            if (!error) {
                let pizzas = result;

                // find if my pizza is available

                let myPizza = pizzas.find((pizza) => {
                    return pizza.type === type && pizza.name === name;
                });
                console.log(myPizza);
                orderDetailsEl.textContent = `You have ordered for ${myPizza.type}
                ${myPizza.name}`

                // Check for free beverages
                addOnEl.textContent = `Checking for Add-Ons`
                query(`api/pizzahub/beverages/${myPizza.id}`, function(result, error) {
                    if (!error) {
                        let beverage = result[0];
                        console.log(beverage);
                        addOnEl.textContent = `We have added add-on ${beverage.name} for you`

                        // prepare an order
                        orderEl.textContent = `preparing your order...`
                        query(`api/order`, function(result, error) {
                        if (!error) {
                            console.log(
                                `Your order of ${type} ${name} with $
                                {beverage.name} has been placed`
                            );
                            orderEl.textContent = `Your order of ${type} ${name} with ${beverage.name}
                            has been placed at ${new Date(result.createdAt)}`;
                        }
                        else{
                            console.log("No Pizza is there for you today!")
                        }
                        }, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify( {
                                pizzaId: myPizza.id,
                                beverage: beverage.id,
                            })
                        })
                    }
                })
            }
            })
        }
    }) 
}

orderPizza("veg", "Margherita");

// http://localhost:3000/api/pizzahub/pizzas/PizzaHut
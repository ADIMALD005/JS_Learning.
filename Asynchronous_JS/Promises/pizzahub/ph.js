function getShopIds() {
    const url = `api/pizzahub`;
    return query(url);
}

function getPizzaList(shopId) {
    const url = `api/pizzahub/pizzas/${shopId}`;
    return query(url);
}

function getMyPizzaWithAddOn(pizzas, type, name) {
    let myPizza = pizzas.find((pizza) => {
        return pizza.type === type && pizza.name === name;
    });

    const url = `api/pizzahub/beverages/${myPizza.id}`;
    return query(url);
}

function performOrder(result) {
    return query(`api/order`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pizzaId: result.pizzaId,
            beverageId: result.id,
        })
    })
}

// Confirm Order
let confirmOrder = (type, name, createdAt) => {
    console.log(
        `Your order of ${type} ${name} has been placed at ${new Date(
            createdAt
        )}!`
    );
}

async function orderPizza(type, name) {
    try {
    const shopIds = await getShopIds();
    const pizzas = await getPizzaList(shopIds[0]);
    const pizzaWithAddOns = getMyPizzaWithAddOn(pizzas, type, name);
    const order = await performOrder(pizzaWithAddOns[0]);
    confirmOrder(type, name, order.createdAt)
    }
    catch(error) {
        console.error(`Bad luck No Pizza for you today! ${error}`);
    }
}

// Call the orderPizza method
orderPizza("veg", "Margherita");


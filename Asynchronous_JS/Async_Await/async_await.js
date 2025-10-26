const promise = new Promise( function(resolve, reject) {
    setTimeout(() => {
        console.log("I'm a promise");
    }, 1000);
})
promise.then((x) => {console.log(x)});

async function foo() {
    return Promise.resolve(101)
}

// NB: await can't be in a global scope, it must be inside an async function

async function tacklePromise() {
    const result = await foo(); // 101
    console.log(result);
}
tacklePromise();

const errorPromise = new Promise(function(resolve,reject) {
    reject("Error occured!");
})
async function handleErrorPromise() {
    try{
        await errorPromise;
    }catch(error) {
        console.error(error);
    }
} 

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

async function resolvePokemons() {
    const responses = Promise.allSettled([
        fetch(BULBASAUR_POKEMONS_URL),
        fetch(RATICATE_POKEMONS_URL),
        fetch(KAKUNA_POKEMONS_URL)
    ])
    const result = await responses;
    console.log(result);

    const pk_1 = await result[0]?.value.json();
    const pk_2 = await result[1]?.value.json();
    const pk_3 = await result[2]?.value.json();

    console.log(pk_1);
    console.log(pk_1);
    console.log(pk_1);
}
resolvePokemons();

// OR

async function resolvePokemonsV2() {
    const responses = await Promise.allSettled([
        fetch(BULBASAUR_POKEMONS_URL).then(response => response.json()),
        fetch(RATICATE_POKEMONS_URL).then(response => response.json()),
        fetch(KAKUNA_POKEMONS_URL).then(response => response.json()),
    ])
    console.log(responses);
};
resolvePokemonsV2();
export async function fetchPokemon(name) {
    // fetch and wait for the api
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
    // if the resource cannot be fetch
    if (!response.ok) {
        throw new Error("Pokemon not found");
    }
    
    // wait for the fetched data
    return await response.json();
}
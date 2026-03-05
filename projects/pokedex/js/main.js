import { fetchPokemon } from "./api.js";
import { displayImg, displayNameAndType, getAndDisplayStats, showErr } from "./ui.js";

const search = document.getElementById("search");

search.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        // get the pokemon name from the user
        const pokemonName = document.getElementById("searchBar").value.trim().toLowerCase();
        
        if (!pokemonName) return; 
    
        // call and fetch api here
        const data = await fetchPokemon(pokemonName);   // dont forget to await
    
        // for display
        displayNameAndType(data.name, data.types);
        displayImg(data.sprites.front_default);
        getAndDisplayStats(data.stats);
        
    } catch (error) {
        showErr(error.message);
    }

})






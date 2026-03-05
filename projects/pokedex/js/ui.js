
// for name and type display
export function displayNameAndType(name, typeArray) {
    const pokemonNameDisplay = document.getElementById("pokemonName");
    pokemonNameDisplay.textContent = captalizeWord(name);
    
    const pokemonType = document.getElementById("pokemonType");
    const formattedTypes = formatTypes(typeArray);
    pokemonType.textContent = formattedTypes;
}

// for formatting if the pokemon has more than one type
export function formatTypes(typeArray) {
    return typeArray.map(t => t.type.name).join(" / ");
}

// for making the first letter uppercase
export function captalizeWord(word) {
    console.log(word)
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// for img display
export function displayImg(img) {
    const pokemonSprite = document.getElementById("pokemonSprite");
    pokemonSprite.style.display = "block";
    pokemonSprite.src = img;
}

// for stats display
export function getAndDisplayStats(statsArray) {
    const statsCard = document.getElementById("statsCard");
    statsCard.innerHTML = "";

    statsArray.forEach(stat => {
        const statName = stat.stat.name;
        const statValue = stat.base_stat;

        const statDiv = document.createElement("div");
        statDiv.classList.add("stat");

        statDiv.innerHTML = `
            <span class="label">${statName}:</span>
            <span class="value">${statValue}</span>
        `;

        statsCard.appendChild(statDiv);
    });
}

// for err display
export function showErr(errMessage) {
    const statsCard = document.getElementById("statsCard");
    statsCard.innerHTML = `<p style="color:red;">${errMessage}</p>`;
    pokemonSprite.src = "";
}
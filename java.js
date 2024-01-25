const API_URL = "https://pokeapi.co/api/v2/pokemon";
const root = document.getElementById("root");
const form = document.getElementById("addPokemonForm");

form.addEventListener("submit", async (event) => {
  // Prevents the form from submitting and refreshing the page
  event.preventDefault();
  const pokemonName = document.getElementById("pokemonName").value;

  try {
    const response = await fetch(`${API_URL}/${pokemonName}`);
    const newPokemon = await response.json();

    // create elements for the Pokemon Card
    const div = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("h1");
    const hp = document.createElement("p");
    const attack = document.createElement("p");
    const abilities = document.createElement("p");

    div.className = "card";
    image.src = newPokemon.sprites.other.dream_world.front_default;
    name.textContent = newPokemon.name;
    hp.textContent = `HP: ${newPokemon.stats[0].base_stat}`;
    attack.textContent = `Attack: ${newPokemon.stats[1].base_stat}`;

    // Display abilities (if any)
    if (newPokemon.abilities.length > 0) {
      abilities.textContent = `Abilities: ${newPokemon.abilities
        .map((ability) => ability.ability.name)
        .join(", ")}`;
    }

    div.appendChild(name);
    div.appendChild(image);
    div.appendChild(hp);
    div.appendChild(attack);
    div.appendChild(abilities);
    root.appendChild(div);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
});

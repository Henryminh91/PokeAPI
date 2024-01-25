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
    div.className = "card";
    image.src = newPokemon.sprites.other.dream_world.front_default;
    name.textContent = newPokemon.name;
    div.appendChild(name);
    div.appendChild(image);
    root.appendChild(div);

    // another image option:
    // image.src = newPokemon.sprites.front_default;
    // other ideas:
    // div.appendChild(pokemonNameLabel);
    // div.appendChild(pokemonAttack);
    // div.appendChild(pokemonHealth);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
});

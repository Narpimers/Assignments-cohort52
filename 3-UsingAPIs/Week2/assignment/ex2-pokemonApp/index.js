/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("some error with API " + response.status);
  }

  return response.json();
}

async function fetchAndPopulatePokemons() {

  const oldSelect = document.querySelector("select");
  const oldImg = document.querySelector("img");
  if (oldSelect) oldSelect.remove();
  if (oldImg) oldImg.remove();

  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

  const select = document.createElement("select");
  const img = document.createElement("img");

  document.body.appendChild(select);
  document.body.appendChild(img);

  const { results } = data;
  results.forEach((pokemon) => {
    const option = document.createElement("option");
    option.textContent = pokemon.name;
    option.value = pokemon.url;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    fetchImage();
  });

  fetchImage();
}

async function fetchImage() {
  const select = document.querySelector("select");
  const url = select.value;

  try {
    const imgData = await fetchData(url);
    const img = document.querySelector("img");
    img.src = imgData.sprites.front_shiny;
  } catch (error) {
    console.error(error);
  }
}

function main() {
  const button = document.createElement("button");
  button.innerHTML = "Get Pokémon!";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    fetchAndPopulatePokemons();
  });
}

window.addEventListener("load", main);
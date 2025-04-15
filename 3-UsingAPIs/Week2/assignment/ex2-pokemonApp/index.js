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
const body = document.querySelector('body');


async function fetchData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("SOME ERROR WITH API" +  response.status);
    }    
    return response.json();

   } catch (error) {
    console.log(error);
    throw error;
   }
  }

function fetchAndPopulatePokemons(data) {
  //createElements
  const select = document.createElement("select");
  const img = document.createElement('img');
  

  // appendChild
  body.appendChild(select);
  body.appendChild(img);

 // add options
  const {results} = data;
  results.map((pokemon) => {
    const namePokemon = pokemon.name;
    const option = document.createElement("option");
    option.innerHTML = namePokemon;
    select.appendChild(option);
  })

   console.log(data); 
}


async function fetchImage(data) {
  const select = document.querySelector('select');
  const {results} = data;
  const currentPokemon = results.find(pokemon => select.value === pokemon.name);
  const url = currentPokemon.url;

  try {

    const imgData = await fetchData(url);
    const img = document.querySelector('img');
    img.src = imgData.sprites.front_shiny;
    

  } catch (error) {
    console.error();
    
  }
}



async function main() {
  const button = document.createElement("button");
  button.innerHTML = "Get pokemon!";
  body.appendChild(button);

  try{
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    button.addEventListener("click", () => {
      fetchAndPopulatePokemons(data);
      const select = document.querySelector('select');
      select.addEventListener("change", () => {
        fetchImage(data);
      })
      fetchImage(data);
    }, { once: true });
  } catch(error) {
    throw new Error("Some error");
  };
}
window.addEventListener('load', main);
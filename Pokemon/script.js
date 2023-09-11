const SearchBar = document.getElementById("searchBar");
const cardsContainer = document.getElementById("cardsContainer");
const searchButton = document.getElementById("search");
const resetButon = document.getElementById("resetButton");

const pokemonDetails = [];
const fetchPokemonDetails = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const promise = fetch(pokemonUrl).then((response) => {
      return response.json();
    });
    promises.push(promise);
    // promises.push(fetch(pokemonUrl).then((response) => response.json()));
  }
  Promise.all(promises).then((data) => {
    data.map((ele) => {
      console.log();
      const pokemonObj = {
        frontShinyImg: ele.sprites["front_shiny"],
        id: ele.id,
        name: ele.name,
        abilities: ele.abilities.map((item) => {
          return item.ability.name;
        }),
        // abilities: ele.abilities.map(ele => ele.ability.name),
        types: ele.types[0].type.name,
      };
      pokemonDetails.push(pokemonObj);
    });
    pokemonDetails.map((pokemon) => {
      createPokemonCard(pokemon);
    });
  });
};

const createPokemonCard = (pokemon) => {
  const cardDiv = document.createElement("div");
  const span = document.createElement("span");
  const img = document.createElement("img");
  const heading = document.createElement("h2");
  const abilitiesDiv = document.createElement("div");
  const abilitesparas = pokemon.abilities.map((ele, idx) => {
    const abilityPara = document.createElement("p");
    abilityPara.innerText = ele;
    return abilityPara;
  });
  const typePara = document.createElement("p");

  span.innerText = pokemon.id;
  img.src = pokemon.frontShinyImg;
  heading.innerText = pokemon.name;
  typePara.innerText = pokemon.types;
  cardDiv.classList.add("cardDiv");
  cardDiv.appendChild(span);
  cardDiv.appendChild(img);
  cardDiv.appendChild(heading);
  abilitesparas.map((ele) => {
    // console.log(ele);
    abilitiesDiv.appendChild(ele);
  });
  cardDiv.appendChild(abilitiesDiv);
  abilitiesDiv.classList.add("abilitiesDiv");
  cardDiv.appendChild(typePara);
  cardsContainer.appendChild(cardDiv);
};

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(SearchBar.value);
  const filteredValues = pokemonDetails.filter((ele) =>
    ele.name.includes(SearchBar.value.toLowerCase())
  );
  console.log(filteredValues);
  cardsContainer.innerHTML = "";
  filteredValues.map((pokemon) => {
    createPokemonCard(pokemon);
  });
  SearchBar.value = "";
});

resetButon.addEventListener("click", (e) => {
  e.preventDefault();
  cardsContainer.innerHTML = "";

  fetchPokemonDetails();
});

fetchPokemonDetails();
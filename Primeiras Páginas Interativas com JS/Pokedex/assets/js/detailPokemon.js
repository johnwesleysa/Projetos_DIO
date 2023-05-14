const allPokemonId = document.getElementById('allPokemonId')
const urlParams = new URLSearchParams(window.location.search)
const maxRecords = 151
const limit = 10
let offset = 0


function convertPokemonToList (pokemon) {

    return `
   <div class="contentPokemon ${pokemon.type}">
        <header class="header">
            <a href="index.html" class="backButtom">
                <img  class="backImg"src="assets/images/icons/arrow-back.png" alt="Back">
            </a>
            <button class="buttonLike">
                <img class="likeButton" src="assets/images/icons/like.png" alt="Like">
            </button>
        </header>
        
            <div class="pokemonInfo">
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            <div class="typeDiv">${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}</div>
                        </ol>
                    </div>
                </li>
                <div class="imgPokemon">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </div>
        
        <div class="pokemonStatus">
            <div class="statusNavegacao">
                        <div class="infoListPokemon">
                            <h1>About</h1>
                        </div>
                        <div class="aboutPokemon">
                            <li class="nameInformation">
                                <ol>
                                    <li>Species</li>
                                    <li>Height</li>
                                    <li>Weight</li>
                                    <li>Abilities</li>
                                </ol>
                            </li>
                            <li class="informationName">
                                <ol>
                                    <li>Seed</li>
                                    <li>2'3.6* (0.70cm)</li>
                                    <li>15.2 lbs (6.9 kg)</li>
                                    <li>Overgrow, Chriorophyl</li>
                                </ol>
                            </li>
                        </div>
            </div>
        </div>
        </div>
    `
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}


pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((pokemon) => pokeApi.getPokemonDetail(pokemon, pokemon.url)))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => (pokemonsDetails))
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        allPokemonId.innerHTML += pokemons.map(convertPokemonToList).join('')  
    })
}

loadPokemonItens(loadPokemonItens(offset, limit))

    
    
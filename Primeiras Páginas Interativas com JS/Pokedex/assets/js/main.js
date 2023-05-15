// Utilizando o DOM para capturar elementos HTML pelo ID.
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

//const maxRecord = 151 - limitação dos pokemons da primeira geração. //const maxRecord = 905 - último pokemon com retorno válido. // const maxRecords = 649 // ultimo pokemon com retorno de foto valida na api
const maxRecords = 151
//const limit = 10 - com base do limite que seria renderizado.
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {// Alterações de identificação do número, logo abaixo:
    return `
        <li class="pokemon ${pokemon.type}" onClick="selectPokemon(${pokemon.number})">
            <span class="number">#0${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

const selectPokemon = async (id) => {
    const title = document.getElementById('title')
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    newPagePokemon(pokemon)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
    pokemonList.parentElement.removeChild(pokemonList)
    title.parentElement.removeChild(title)
}
  
const newPagePokemon = (pokemon) => {
    const contentPokemonId = document.getElementById('contentPokemonId')
    
    const imagem = pokemon.sprites.other.dream_world.front_default
    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    const detailPokemon = `
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
                    <span class="number">#${pokemon.id}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            <div class="typeDiv">${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}</div>
                        </ol>
                    </div>
                </li>
                <div class="imgPokemon">
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
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
                                    
                                </ol>
                            </li>
                            <li class="informationName">
                                <ol>
                                    <li style="text-transform: capitalize;">${type}</li>
                                    <li>${pokemon.height}</li>
                                    <li>${pokemon.weight}</li>
                                   
                                </ol>
                            </li>
                        </div>
            </div>
        </div>
        </div>
    `
       
   
    contentPokemonId.innerHTML = detailPokemon 
}



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const listPokemon = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += listPokemon
        
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
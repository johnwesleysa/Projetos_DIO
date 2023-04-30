

function convertPokemonToList (pokemon) {

    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</span>
                
                <div class="detail">
                    <ol  class="types">
                        <li class="type" >Grass</li>
                        <li class="type" >Poison</li>
                    </ol>

                    <img src="assets/images/pokemons/Bulbassaur.png" alt="${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons) => {
        const listItems = []
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItems.push(convertPokemonToList(pokemon))
        }
        pokemonList.innerHTML += convertPokemonToList(pokemon)
    })
    
    
import { useEffect, useState } from "react"

export const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/`
        return fetch(url)
            .then(resp => resp.json())
            .then(response => {
                const { results } = response
                const pokemon = results.map(poke => {
                    return {
                        name: poke.name,
                        url: poke.url
                    }
                })
                return pokemon
            }).then(pokemon => (
                pokemon.map(pokeInfo => {
                  return  fetch(pokeInfo.url)
                        .then(resp => resp.json())
                        .then(response => {
                            const data = response
                            const pokeData = {
                                    name: data.name,
                                    sprite: data.sprites.front_default
                                }
                            return setPokemonList(poke=>[...poke,pokeData])
                        })
                        
                })
            ))

    }

    return (
        <div>
            {
                pokemonList.map(pokeName => {
                    return <div>
                        <h4 key={pokeName.name}> {pokeName.name}</h4>
                        <img src={pokeName.sprite} alt={pokeName.name} />
                    
                        </div>
                }

                )
            }

        </div>
    )
}

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
                    return fetch(pokeInfo.url)
                        .then(resp => resp.json())
                        .then(response => {
                            const data = response
                            const pokeData = {
                                id: data.id,
                                name: data.name,
                                sprite: data.sprites.front_default,

                            }
                            return setPokemonList(poke => [...poke, pokeData])
                        })

                })
            ))

    }

    console.log(pokemonList)

    return (
        <div>
            <table>

                <tr>
                    <th>id</th>
                    <th>sprite</th>
                    <th>nombre</th>
                </tr>
                {
                    pokemonList.map(pokeName => {
                        return <tr>
                             <td>{pokeName.id}</td>
                              <td><img src={pokeName.sprite} alt={pokeName.name} /></td>
                                <td><small key={pokeName.name}> {pokeName.name}</small></td>
                              
                            </tr>
                        
                    }

                    )
                }

            </table>

        </div>
    )
}

import { useEffect, useState } from "react"

export const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=1200`
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
                                types: data.types.map(type => {
                                    return type.type.name
                                })
                            }
                            
                             return pokeData
                        }).then(pokeData=>setPokemonList(poke => [...poke, pokeData]))

                })
            ))
    }

    pokemonList.sort(function (a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })

console.log(pokemonList)


    return (
        <div className="div">
            <table >

                <tr>
                    <th>id</th>
                    <th>sprite</th>
                    <th>nombre</th>
                    <th>tipo 1</th>
                        <th>tipo 2</th>
                    

                </tr>
                {
                    pokemonList.map(pokeName => {
                        return <tr>
                            <td className="id">{pokeName.id}</td>
                            <td><img src={pokeName.sprite} alt={pokeName.name} /></td>

                            <td><small key={pokeName.name}> {pokeName.name}</small></td>
                            
                            {
                               pokeName.types.length<2 ? (<><td>{pokeName.types}</td><td></td></>): pokeName.types.map(type=>{return <td> {type} </td> }) 
                            }
                           
                        </tr>

                    }

                    )
                }


            </table>

        </div>
    )
}

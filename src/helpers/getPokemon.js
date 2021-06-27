

export const getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/`
    return fetch(url)
        .then(resp => resp.json())
        .then(response => {
            const {results}=response 
            return results
        }).then(results=>
                console.log(results)
            )

}
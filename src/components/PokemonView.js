import React, { useEffect, useState } from 'react'
import './styles.css'

export const PokemonView = ({pokemon='ditto'}) => {

    const [state, setState] = useState([]);


    useEffect(() => {

        const getPokemon = async()=>{
        const url=`https://pokeapi.co/api/v2/pokemon/${pokemon}` 
        const res = await fetch(url)
        const data = await res.json()

        const poke={
                name:data.name,
                front:data.sprites.front_default,
                back:data.sprites.back_default,
                stats: data.stats.map(stats=>{
                    return stats
                }) 
            }

        setState(poke)
      
        
   }
   getPokemon()
   
   
    }, [pokemon])

       console.log(state)

       
      

    return (
        
        <div className="pokemon">
            <h1>{state.name}</h1>
            <img src={state.front} alt={state.name} />
            <img src={state.back} alt={state.name} />
           {state.stats && state.stats.map(stat=>{
               return <div><small>{stat.stat.name}: {stat.base_stat}</small> <br /></div> 
           })}
        </div> 
    )
}

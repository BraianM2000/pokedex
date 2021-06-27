import React, { useState } from 'react'

export const SearchPokemon = ({setPokemon}) => {


    const [value, setValue] = useState('')

    const handleSubmit=e=>{
        e.preventDefault()
        setPokemon(value)
        setValue('')
    }

    const handleChange=(e)=>{
        setValue(e.target.value)
    
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  type="text" onChange={handleChange} placeholder="Busca un pokemon"/>
                <button type='submit' onClick={handleSubmit}>Buscar</button>
            </form>
        </div>
    )
}

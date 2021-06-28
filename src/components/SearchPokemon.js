import React, { useState } from 'react'
import './styles.css'

export const SearchPokemon = ({setPokemon}) => {


    const [value, setValue] = useState('')

    const handleSubmit=e=>{
        e.preventDefault()
        setPokemon(value)
    }

    const handleChange=(e)=>{
        setValue(e.target.value)
    
    }


    return (
        <div>
            <form className="row justify-content-center" onSubmit={handleSubmit} >
                <input className="form-group  col-md-2"  onChange={handleChange} placeholder="Busca un pokemon"/>
                <button className="btn btn-primary col-md-2" type='submit' onClick={handleSubmit}>Buscar</button>
            </form>
        </div>
    )
}

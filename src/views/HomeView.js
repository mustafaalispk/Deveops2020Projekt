import React, { useState, useEffect } from 'react'
import pokemon from '../shared/images/pokemon.gif'
import PokemonService from '../shared/api/service/PokemonService'
import { useDebounce } from '../hooks/useDebounce'

//import { useHistory } from 'react-router-dom'
//import RoutingPath from '../routes/RoutingPath'

export const HomeView = () => {
    //const history = useHistory()
    const [data, setData] = useState()
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const debouncedSearchTerm = useDebounce(search, 500)

    const fetchDataFromPokemonAPI = async () => {
        setLoading(true)
        try {
            const response = await PokemonService.searchForPokemon(search.toLowerCase())
            setData(response.data)
            setLoading(false)
        }
        catch (error) {

            console.log(error)
            setLoading(false)
            //history.push(RoutingPath.PageNotFoundView)
        }
    }
    const displayDataWhenDoneLoading = () => {
        return <div>
            <hr />
            <br />
            <img src={data?.sprites?.front_default} alt={'Error'} />
            <h1>name: {data?.name}</h1>
            <h1>height: {data?.height} lb</h1>
            <h1>weight: {data?.weight} lb</h1>
            <h1>abilities: {data?.moves?.length} total moves</h1>

        </div>
    }
    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchDataFromPokemonAPI()
        }
    }, [debouncedSearchTerm])
    return (
        <div>
            <button onClick={() => console.log(data)}>x</button>
            <input onChange={(event) => setSearch(event.target.value)} />
            {loading ?
                <img src={pokemon} alt="Error.." />
                : displayDataWhenDoneLoading()}
        </div>

    )
}
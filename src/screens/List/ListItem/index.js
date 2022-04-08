import { useEffect } from "react";
const ListItem = ({data}) => {
    const {pokemon,url} = data;
    const getPokemonData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(pokemonData => '')
    }
    useEffect(() => {
        getPokemonData()
    },[pokemon])
    return (
        <>
        </>
    )
}

export default ListItem
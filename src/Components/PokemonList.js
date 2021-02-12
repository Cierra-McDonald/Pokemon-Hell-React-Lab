import React from 'react'
import PokemonItem from './PokemonItem';

class PokemonList extends React.Component {
    render() {
        return (
            <ul className="pokemon-ul">
                {this.props.filteredPokemons.map(singlePokemonObject => <PokemonItem 
                key={singlePokemonObject._id}
                pokemonProp={singlePokemonObject}
                />)} 
            </ul>
        )
    }
}
export default PokemonList;

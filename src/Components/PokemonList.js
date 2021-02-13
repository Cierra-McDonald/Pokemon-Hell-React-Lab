import React from 'react'
import PokemonItem from './PokemonItem';

class PokemonList extends React.Component {//getting filtered pokemon array from filteredPokemons prop, created in SearchPage... map function will create a 
    //single pokemon object by going into PokemonItem component and grabbing the html elements...
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

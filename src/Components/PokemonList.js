import React from 'react'
import PokemonItem from './PokemonItem';
import RollingPokeBall  from '../RollingPokeBall.gif'

class PokemonList extends React.Component {//getting filtered pokemon array from filteredPokemons prop, created in SearchPage... map function will create a 
    //single pokemon object by going into PokemonItem component and grabbing the html elements...
    render() {
        const loading = this.props.loading;
        return (
            <div>
                {
                loading 
                    ? 
                        <div className="poke-ball-div">
                            <img className="poke-ball-img" src={RollingPokeBall} alt=""/>
                            {/* <p className="loading-text">Loading...</p> */}
                        </div>
                    :
                    <ul className="pokemon-ul">
                        {this.props.filteredPokemons.map(singlePokemonObject => <PokemonItem 
                        key={singlePokemonObject._id}
                        pokemonProp={singlePokemonObject}
                        />)} 
                    </ul>
                } 
            </div>
        )
    }
}
export default PokemonList;



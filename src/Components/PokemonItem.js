import React from 'react';
import { Link } from 'react-router-dom';


class PokemonItem extends React.Component {
    render() {
        return (//Html elements that are rendered to the page in form of PokeCards
            <Link exact activeClassName="selected" to={`/search/${this.props.pokemonProp.pokemon}`}>
                <div className="poke-list" >
                    <div className="images">{this.props.pokemonProp.pokemon}</div>
                    <img className="images" src={this.props.pokemonProp.url_image} alt="" height="250"/>
                    {/* <div className="images">Type: {this.props.pokemonProp.type_1}</div>
                    <div className="images">Shape: {this.props.pokemonProp.shape}</div>
                    <div className="images">Ability: {this.props.pokemonProp.ability_1}</div>
                    <div className="images">Attack Strength: {this.props.pokemonProp.attack}</div> */}
                </div>
            </Link>    
        )
    }
}
export default PokemonItem;

// this.props.singlePokemonObject

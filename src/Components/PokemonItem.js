import React from 'react';


class PokemonItem extends React.Component {
    render() {
        return (
            <div className="poke-list">
                <div className="images">{this.props.pokemonProp.pokemon}</div>
                <img className="images" src={this.props.pokemonProp.url_image} alt="" height="250"/>
                <div className="images">{this.props.pokemonProp.type_1}</div>
                <div className="images">{this.props.pokemonProp.attack}</div>
            </div>
        )
    }
}
export default PokemonItem;

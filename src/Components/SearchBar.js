import React from 'react'
import pokemonData from '../data'
import PokemonItem from './PokemonItem'
import SearchPage from './SearchPage'

class SearchBar extends React.Component {
    
    render () {
        return (
            <div className="search-bar">
                <input
                    placeholder={"Find a pokemon"}
                    onChange={this.props.handleChange}
                />     
            </div>
        )
    
    };
}
export default SearchBar;



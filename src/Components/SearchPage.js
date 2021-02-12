import React from 'react'
import pokemonData from '../data.js'
import SearchBar from './SearchBar.js';
import SortPoke from './SortPoke.js';
import '../App.css';
import PokemonList from './PokemonList.js';

class SearchPage extends React.Component {
    state = { 
        pokemon: '',
        type_1: '',
        attack: '',

    }
    //here I will be changing state that will then UPDATE THE DOM AND RENDER COOL THINGS TO THE PAGE WHEN THE USER
    //CLICKS THESE THINGS
    handleNameChange = (e) => {
        this.setState({
            pokemon: e.target.value
        })
    }
    handleTypeChange = (e) => { 
        this.setState({ 
            type_1: e.target.value
        })
    } 
   
    handleAttackChange = (e) => { 
        this.setState({ 
            attack: Number(e.target.value)
        })
    } 

    render() {
        // console.log(this.state)
        // this.state.type_1.sort((a,b) => 
        //     a[this.state.type_1].localeCompare(b[this.state.type_1])
        //     );

        // const sortedPokemon = pokemonData.sort((a,b) => b.pokemon - a.pokemon)
        const filteredPokemons = pokemonData.filter((pokemonSingleData) => {
            if (this.state.pokemon) {
                if (pokemonSingleData.pokemon === this.state.pokemon) return true;
            }
            
            if (!this.state.type_1 && !this.state.attack) return true;

            if (this.state.type_1 && !this.state.attack) { 
                if (pokemonSingleData.type_1 === this.state.type_1) return true;
            }
            if (this.state.attack && !this.state.type_1) {
                if (pokemonSingleData.attack === this.state.attack) return true; 
            }
            if (this.state.type_1 && this.state.attack) { 
                if (pokemonSingleData.type_1 === this.state.type_1 && pokemonSingleData.attack === this.state.attack) return true;
            }

            return false;
        })
        return (
            <div>
                <div className="search-container">
                    Search Pokemon Name:
                    <SearchBar
                        currentValue={this.state.pokemon}
                        handleChange={this.handleNameChange}
                        options={['bulbasaur','ivysaur','charmander','charmeleon','charizard', 'squirtle','wartortle','blastoise','caterpie','metapd', 'beedrill','weedle','kakuna','pidgey']}
                    />
                    Sort Pokemon By Type:
                    <SortPoke
                        currentValue={this.state.type_1}
                        handleChange={this.handleTypeChange}
                        options={['fire','grass','water','bug','normal']}
                    />
                    Sort Pokemon By Attack:
                    <SortPoke
                        currentValue={this.state.attack}
                        handleChange={this.handleAttackChange}
                        options={[49, 62, 52, 64, 84, 48, 63, 83, 30, 20, 90, 35, 25, 45]}
                    />
                </div>
                < PokemonList filteredPokemons = {filteredPokemons}/>
            </div>
        )
    }
}
export default SearchPage;

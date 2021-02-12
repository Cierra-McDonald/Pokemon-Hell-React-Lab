import React from 'react'
import pokemonData from '../data.js'
import SearchBar from './SearchBar.js';
import SortPoke from './SortPoke.js';
import '../App.css';
import PokemonList from './PokemonList.js';

class SearchPage extends React.Component {
    state = { 
        userInput: '',
        type_1: '',
        attack: '',
        pokemonList: [],

    }

    componentDidMount() { 
        this.setState({
            pokemonList: pokemonData
        },
        function() { console.log( this.state.pokemonList)} 
        );
        console.log(this.state.pokemonList)
    }
    //here I will be changing state that will then UPDATE THE DOM AND RENDER COOL THINGS TO THE PAGE WHEN THE USER
    //CLICKS THESE THINGS
    handleInputChange = (e) => {
         this.setState({
            userInput: e.target.value
        },
         this.setState({

             pokemonList: this.filterPokemons(e.target.value)
         })
         
        )
        console.log(this.state.userInput)
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
    filterPokemons = (userInput) => {
        const result = pokemonData.filter(item => {
            let userLength = userInput.length;
            let name = item['pokemon'];
            name = name.substring(0, userLength)
            if (userInput === name) return true;
            else return false;
        })
        return result;
    } 

    render() {
        // console.log(this.state)
        // this.state.type_1.sort((a,b) => 
        //     a[this.state.type_1].localeCompare(b[this.state.type_1])
        //     );

        // const sortedPokemon = pokemonData.sort((a,b) => b.pokemon - a.pokemon)
        // const filteredPokemons = pokemonList.filter((pokemonSingleData) => {
            
        // })
        return (
            <div>
                <div className="search-container">
                    Search Pokemon Name:
                    <SearchBar
                        currentValue={this.state.userInput}
                        handleChange={this.handleInputChange}
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
                < PokemonList filteredPokemons= {this.state.pokemonList}/>
            </div>
        )
    }
}
export default SearchPage;



// if (!this.state.type_1 && !this.state.attack) return true;

// if (this.state.type_1 && !this.state.attack) { 
//     if (pokemonSingleData.type_1 === this.state.type_1) return true;
// }
// if (this.state.attack && !this.state.type_1) {
//     if (pokemonSingleData.attack === this.state.attack) return true; 
// }
// if (this.state.type_1 && this.state.attack) { 
//     if (pokemonSingleData.type_1 === this.state.type_1 && pokemonSingleData.attack === this.state.attack) return true;
// }

// return false;
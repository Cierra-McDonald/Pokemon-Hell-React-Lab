import React from 'react'
import pokemonData from '../data.js'
import SearchBar from './SearchBar.js';
import SortPoke from './SortPoke.js';
import '../App.css';
import PokemonList from './PokemonList.js';

class SearchPage extends React.Component {
    state = { 
        userInput: '',
        pokemonList: pokemonData,
        sortOrder: 'Ascending Order',
        category: 'pokemon'

    }

    componentDidMount() { 
        this.setState({
            pokemonList: this.sortOrder(this.state.sortOrder, this.state.category)
        }
        );
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
    }
    handleSortOrder = (e) => { 
        this.setState({
            sortOrder: e.target.value
        },
        this.sortOrder(e.target.value, this.state.category));
    } 
   
    handleSortByCategory = (e) => { 
        console.log(e.target.value)
        this.setState({ 
            category: e.target.value
        },
        this.sortOrder(this.state.sortOrder, e.target.value));
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


    sortOrder = (selection, category) => { //this function is going to compare the Descending/Ascending order in the dropdown (user's choice) to the options in <SortPoke> Component and firing the onChange eventListener in SortPoke Component (onChange), THEN it's going to sort the pokenames based on the choice...ascending will be from A-Z, descending will be from Z-A...the default is Ascending that is setState in handleSortOrder
        console.log(selection)
        let sortedPokeList = this.state.pokemonList;
        if (selection === 'Descending Order'){
            sortedPokeList =  this.state.pokemonList.sort(function(a,b) {
                if (a[category] > b[category]){
                    return -1;
                } if (a[category] < b[category]){
                    return 0;
                }
            })
        } else {
            sortedPokeList =  this.state.pokemonList.sort(function(a,b) {
                console.log('in hereee')
                if (a[category] < b[category]){
                    return -1;
                } if (a[category] > b[category]){
                    return 0;
                }
            })
        }
        return sortedPokeList;
    }

    render() {
       
        return (
            <div>
                <div className="search-container">
                    Search Pokemon Name:
                    <SearchBar
                        currentValue={this.state.userInput}
                        handleChange={this.handleInputChange}
                        />
                    Sort Pokemon By Ascending/Descending:
                    <SortPoke
                        currentValue={this.state.sortOrder}
                        handleChange={this.handleSortOrder}
                        options={['Ascending Order', 'Descending Order']}
                        />
                    Sort Pokemon By Category:
                    <SortPoke
                        currentValue={this.state.category}
                        handleChange={this.handleSortByCategory}
                        options={['pokemon','type_1', 'shape', 'ability_1']}
                        />
                </div>
                < PokemonList filteredPokemons= {this.state.pokemonList}/>
            </div>
        )
    }
}
export default SearchPage;




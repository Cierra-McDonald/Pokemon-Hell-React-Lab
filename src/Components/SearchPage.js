import React from 'react'
import pokemonData from '../data.js'
import SearchBar from './SearchBar.js';
import SortPoke from './SortPoke.js';
import '../App.css';
import PokemonList from './PokemonList.js';
import request from 'superagent'

class SearchPage extends React.Component {
    state = { 
        userInput: '',
        pokemonList: pokemonData,
        // async () => {await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=801').body.results}, //set this state to an empty array, not the url yet...
        sortOrder: 'Ascending Order',
        category: 'pokemon',
        loading: true

    }


    componentDidMount = async () => {//is invoked when user gets to the Search page, by clicking the Search link on Home, this is setting the initial state of the page that will display the asceding sort order by pokemon name
        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=801')
        console.log(data.body.results);
        this.setState({
            pokemonList : data.body.results,
            pokemonData : data.body.results,
            loading: false
        }, //set the state to pokemonList : data.body.results     
        this.setState({
            pokemonList: this.sortOrder(this.state.sortOrder, this.state.category)
        })
        )
        //just put the link here...not the body.results...wait till you are setting the state
          
        
    };  

    //here I will be changing state that will then UPDATE THE DOM AND RENDER COOL THINGS TO THE PAGE WHEN THE USER
    //CLICKS THESE THINGS
    handleInputChange = (e) => {//invoked when the user types in the search bar, and invokes the onChange even listener in SearchBar Component, since JS words asynchrously, we want the user to be able to type in what they are searching for AND see the filters right after...'},' acts like the await and async notation so the filtered pokemon 'new array of pokemon' has time to be created and sent back, this occurs because filterPokemon is being called here!
         this.setState({
            userInput: e.target.value
        },
         this.setState({
             pokemonList: this.filterPokemons(e.target.value)
         })
        )
    }
    handleSortOrder = (e) => {//invoked when the user chooses Ascending or Descending in the drop down, and invoking the onChange event listener in SortPoke Component, takes userInput as a parameter and uses the async/await notation to create the sorted list and sends it back to here...This will be a mutated Array
        this.setState({
            sortOrder: e.target.value
        },
        console.log(this.sortOrder(e.target.value, this.state.category))
        );
    } 
   
    handleSortByCategory = (e) => { //invoked when the user chooses type, ability, shape or pokename name in the drop down, and invoking the onChange event listener in SortPoke Component, takes userInput as a parameter and uses the async/await notation to create the sorted list and sends it back to here...This will be a mutated Array
        console.log(e.target.value)
        this.setState({ 
            category: e.target.value
        },
        console.log(this.sortOrder(this.state.sortOrder, e.target.value))
        );
    } 

    filterPokemons = (userInput) => {//invoked when the user is typing in the search bar, the result will be a pokemon object(s) from the pokemonData.js, the item will be an iteration each time the user is putting in more letters into the search bar...used a .substring method to return a part of the string between the start and stop index...compared userInput(parameter) to the Object.name attribute...result returned is an Array of filtered pokemon objects 
        const result = pokemonData.filter(item => {
            let userLength = userInput.length;
            let name = item['pokemon'];
            name = name.substring(0, userLength)
            if (userInput === name) return true;
            else return false;
        })
        return result;
    } 


    sortOrder = (selection, category) => { //invoked when user chooses a sortOrder and sorting category in the dropdown this function is going to compare the Descending/Ascending order in the dropdown (user's choice) to the options in <SortPoke> Component and firing the onChange eventListener in SortPoke Component (onChange), THEN it's going to sort the pokenames based on the choice that the user chose...ascending will be from A-Z, descending will be from Z-A...the default is Ascending that is setState in handleSortOrder, function takes in two parameters selection and category...selection = userInput from dropdown, category is an object attribute defined in state
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
                < PokemonList 
                    loading={this.state.loading}
                    filteredPokemons= {this.state.pokemonList}/>
            </div>
        )
    }
}
export default SearchPage;




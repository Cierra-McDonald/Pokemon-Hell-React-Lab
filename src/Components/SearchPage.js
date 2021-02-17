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
        pokemonList: [],
        sortOrder: 'asc',
        category: 'pokemon',
        loading: true

    }


    componentDidMount = async () => {//is invoked when user gets to the Search page, by clicking the Search link on Home, this is setting the initial state of the page that will display the asceding sort order by pokemon name
       
        const data = await this.sortOrder(this.state.sortOrder, this.state.category)
      
       
        this.setState({
            pokemonList : data,
            loading: false
        })
        
    };  

    //here I will be changing state that will then UPDATE THE DOM AND RENDER COOL THINGS TO THE PAGE WHEN THE USER
    //CLICKS THESE THINGS
    handleInputChange = async (e) => {//invoked when the user types in the search bar, and invokes the onChange even listener in SearchBar Component, since JS words asynchrously, we want the user to be able to type in what they are searching for AND see the filters right after...'},' acts like the await and async notation so the filtered pokemon 'new array of pokemon' has time to be created and sent back, this occurs because filterPokemon is being called here!
        let pokeList = await this.filterPokemons(e.target.value)

        this.setState({
            userInput: e.target.value,
            pokemonList: pokeList,
            loading: false
        }
        )
        
    }
    handleSortOrder = async (e) => {//invoked when the user chooses Ascending or Descending in the drop down, and invoking the onChange event listener in SortPoke Component, takes userInput as a parameter and uses the async/await notation to create the sorted list and sends it back to here...This will be a mutated Array
        
        this.setState({ 
            sortOrder: e.target.value
        })
        let pokeList = await this.sortOrder(e.target.value, this.state.category)
        console.log(e.target.value)
        this.setState({
            pokemonList: pokeList,
            loading: false
        }
        );
    } 
   
    handleSortByCategory = async (e) => { //invoked when the user chooses type, ability, shape or pokename name in the drop down, and invoking the onChange event listener in SortPoke Component, takes userInput as a parameter and uses the async/await notation to create the sorted list and sends it back to here...This will be a mutated Array
        // console.log(e.target.value)

        this.setState({
            category: e.target.value
        })
        let pokeList = await this.sortOrder(this.state.sortOrder, e.target.value)
        this.setState({ 

            pokemonList: pokeList,
            loading: false
        }
        );
    } 

    filterPokemons = async (userInput) => {//invoked when the user is typing in the search bar, the result will be a pokemon object(s) from the pokemonData.js, the item will be an iteration each time the user is putting in more letters into the search bar...used a .substring method to return a part of the string between the start and stop index...compared userInput(parameter) to the Object.name attribute...result returned is an Array of filtered pokemon objects 
        this.setState({
            loading: true
        })
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=801&pokemon=${userInput}`);

        return data.body.results;
    } 


    sortOrder = async (selection, category) => { //invoked when user chooses a sortOrder and sorting category in the dropdown this function is going to compare the Descending/Ascending order in the dropdown (user's choice) to the options in <SortPoke> Component and firing the onChange eventListener in SortPoke Component (onChange), THEN it's going to sort the pokenames based on the choice that the user chose...ascending will be from A-Z, descending will be from Z-A...the default is Ascending that is setState in handleSortOrder, function takes in two parameters selection and category...selection = userInput from dropdown, category is an object attribute defined in state
        this.setState({ 
            loading: true
        })
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=801&sort=${category}&direction=${selection}`);
        
        return data.body.results;
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
                        options={['asc', 'desc']}
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




import React, { Component } from 'react'
import '../App.css';
import request from 'superagent'
import RollingPokeBall  from '../RollingPokeBall.gif'


//  YOU MAY NEED TO USE .THIS.PROPS.HISTORY.PUSH('DETAILS/POKEBASE')
export default class DetailsPage extends Component {

    state = { 
        pokemonList: {}, 
        loading: true

    }

    componentDidMount = async () => { 
        this.setState({ 
            loading: true
        })

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`) 
        console.log(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
        await this.setState({ 
            loading: false, 

            pokemonList: data.body.results[0]
            
            
        })
        console.log(this.state.pokemonList)
    }



    render() {
        const loading = this.state.loading
        //how do I get access to the id that's in the URL?

        console.log(this.state.pokemonList)
        return (
            <div>
                <h3>The Details!</h3> 
                {
                    loading
                        ?
                            <div className="poke-ball-div">
                            <img className="poke-ball-img" src={RollingPokeBall} alt=""/>
                            {/* <p className="loading-text">Loading...</p> */}
                            </div>
                        :
                            <div>
                                <p className="images">{this.state.pokemonList.pokemon}</p>
                                <img className="images" src={this.state.pokemonList.url_image} alt="" height="250"/>
                                <p>Type: {this.state.pokemonList.type_1}</p>
                                <p>Weight: {this.state.pokemonList.weight} lbs.</p>
                                <p>Shape: {this.state.pokemonList.shape}</p>
                                <p>Ability 1: {this.state.pokemonList.ability_1}</p>
                                <p>Ability 2: {this.state.pokemonList.ability_2} </p>
                                <p>Ability Hidden: {this.state.pokemonList.ability_hidden} </p>
                                <p>Defense: {this.state.pokemonList.defense} </p>
                                <p>Egg group: {this.state.pokemonList.egg_group_1} </p>
                            </div>
                }
            </div>
        )
    }
}



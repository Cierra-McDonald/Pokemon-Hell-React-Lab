import React, { Component } from 'react'
import '../App.css';
import request from 'superagent'



export default class DetailsPage extends Component {
    render() {
        return (
            <div>
                <h3>PokeBase:{this.props.match.params.pokebase}</h3>  
            </div>
        )
    }
}

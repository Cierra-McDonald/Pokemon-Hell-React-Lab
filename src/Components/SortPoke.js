import React from 'react'
import '../App.css';

class SortPoke extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <select className="sort-drop"
                    value={this.props.currentValue}
                    onChange={this.props.handleChange}
                    > 
                    {
                        this.props.options.map(pokeItem => <option value={pokeItem}> {pokeItem}</option>)
                    }
                </select>
            </div>
        )
    }
}
export default SortPoke;

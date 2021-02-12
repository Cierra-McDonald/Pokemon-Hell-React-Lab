import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <select
                value={this.props.currentValue}
                onChange={this.props.handleChange}>
                    {this.props.options.map(pokeItem => <option value={pokeItem}> {pokeItem}</option>)}
                Search Pokemon Name: <br/>
                {/* <input></input><br/> */}
                <button>Search!</button>
                </select>
            </div>
        )
    }
}
export default SearchBar

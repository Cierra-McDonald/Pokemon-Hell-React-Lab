import React from 'react'


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



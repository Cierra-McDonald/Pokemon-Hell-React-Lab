import React, {Component} from 'react';
import { NavLink, withRouter} from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <div className="poke-header">
                <div className="poke-link-container">
                    <NavLink className="poke-link" exact activeClassName="selected" to="/">
                        Home
                    </NavLink>
                    {
                    this.props.location.pathname !== '/search'
                    && <NavLink className="poke-link" exact activeClassName="selected" to="/search">
                        Search
                    </NavLink>
                    }
                </div>    
                <h1 className="poke-words"> Welcome to Pokemon Hell</h1>
                
            </div>
        )
    }
})
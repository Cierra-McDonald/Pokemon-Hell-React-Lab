import './App.css';
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';
import Header from './Components/Header';
import DetailsPage from './Components/DetailsPage'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <Header/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                         <Route 
                            path="/search/:pokemonName" 
                            exact
                            render={(routerProps) => <DetailsPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

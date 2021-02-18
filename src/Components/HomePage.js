import React from 'react'

import Awakepikachu  from '../Awakepikachu.gif'


class HomePage extends React.Component {
    render() {
        return (
            <div className="pikachu">
                <img className="pikachu-pic" src={Awakepikachu} alt="" width="500"/> 
            </div>
        )
    }
}
export default HomePage;
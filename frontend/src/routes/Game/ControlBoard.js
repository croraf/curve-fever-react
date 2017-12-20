import React from 'react';

import { NavLink } from 'react-router-dom';
import { PlayersList } from './PlayersList';

const activeStyle = {
    color: 'red'
};

class ControlBoard extends React.Component {
    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <div style={{height: 'calc(100% - 50px)', width: '100%'}}>
                    <PlayersList />
                </div>
                <div style={{height: '50px', width: '100%'}}>
                    <NavLink to='/home' activeStyle={activeStyle}>Home</NavLink>
                </div>
            </div>
        );
    }
}

export {ControlBoard};

import React from 'react';

import { NavLink } from 'react-router-dom';
import { PlayersList } from './PlayersList';

const activeStyle = {
    color: 'red'
};


import Paper from 'material-ui/Paper';
class ControlBoard extends React.Component {
    render() {
        return (
            <Paper style={{height: '100%', width: '100%'}}>
                <Paper style={{height: 'calc(100% - 50px)', width: '100%'}}>
                    <PlayersList />
                </Paper>
                <Paper style={{height: '50px', width: '100%'}}>
                    <NavLink to='/home' activeStyle={activeStyle}>Home</NavLink>
                </Paper>
            </Paper>
        );
    }
}

export {ControlBoard};

import React from 'react';

import Button from 'material-ui/Button';

import { NavLink } from 'react-router-dom';

const activeStyle = {
    color: 'red'
};

class Home extends React.Component {
    render() {
        return (
            <div>

                <NavLink to='/game' activeStyle={activeStyle} style={{position: 'absolute', bottom: '5px', left: '5px'}}>Game</NavLink>
                
                <Button raised color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}

export { Home };

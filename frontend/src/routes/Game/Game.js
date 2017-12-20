import React from 'react';


import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import {ControlBoard} from './ControlBoard';
import {GameBoard} from './GameBoard';
import {StatusBar} from './StatusBar';


class Game extends React.Component {
    render() {
        return (
            <div style={{height: '100%', backgroundColor:'white', color: 'black'}}>

                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            Title
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{width: '200px'}}>
                        <ControlBoard />
                    </div>
                    <div style={{width: 'calc(100% - 200px)'}}>
                        <div style={{height: 'calc(100% - 50px)', width: '100%'}}>
                            <GameBoard />
                        </div>
                        <div style={{height: '50px', width: '100%'}}>
                            <StatusBar />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export {Game};

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
            <div style={{height: '100%', backgroundColor:'white', color: 'black', display: 'flex', flexDirection: 'column'}}>

                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            Curve Fever
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Paper style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
                    <Paper style={{width: '300px'}}>
                        <ControlBoard />
                    </Paper>
                    <Paper style={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                        <Paper style={{flexGrow: 1, width: '100%', display: 'flex'}}>
                            <GameBoard />
                        </Paper>
                        <Paper style={{height: '50px', width: '100%'}}>
                            <StatusBar />
                        </Paper>
                    </Paper>
                    <Paper style={{width: '300px'}}>
                        Commercials
                    </Paper>
                </Paper>
                
            </div>
        );
    }
}

export {Game};

import React from 'react';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

class PlayersList extends React.Component {
    render() {

        const players1 = ['Player 1', 'Player 2'];
        const players2 = ['Player 4', 'Player 5', 'Player 6'];

        return (
            <div>
                <List>
                    {players1.map(player => (
                        <ListItem key={player} button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={player} />
                        </ListItem>
                    ))}
                </List>

                <Divider />

                <List>
                    {players2.map(player => (
                        <ListItem key={player} button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={player} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export { PlayersList };

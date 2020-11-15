// rfce = React Functional Component w/ export

import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary="Todo" secondary={props.name}></ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo

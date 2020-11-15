// rfce = React Functional Component w/ export

import { List, ListItem, ListItemText } from '@material-ui/core'
import './Todo.css'
import React from 'react'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary="Todo Item" secondary={props.name}></ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo

// rfce = React Functional Component w/ export

import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import './Todo.css'
import React from 'react'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary="Todo Item" secondary={props.todo.todo}></ListItemText>
            </ListItem>
            <DeleteForeverIcon onClick={event =>
                db.collection('todos').doc(props.todo.id).delete()
            }></DeleteForeverIcon>
        </List>
    )
}

export default Todo

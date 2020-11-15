// rfce = React Functional Component w/ export

import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import './Todo.css'
import React from 'react'
import db from './firebase'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary="Todo Item" secondary={props.todo.name}></ListItemText>
            </ListItem>
            <Button onClick={event =>
                db.collection('todos').doc(props.todo.id).delete()
            }>Delete Me</Button>
        </List>
    )
}

export default Todo

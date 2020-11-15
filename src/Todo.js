// rfce = React Functional Component w/ export

import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'
import './Todo.css'
import React, { useState } from 'react'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function Todo(props) {
    // keep track of what open is 
    const [open, setOpen] = useState(false);

    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)}>
                <div>
                    <h1>open</h1>
                    <button onClick={e => setOpen(false)}></button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemText primary="Todo Item" secondary={props.todo.todo}></ListItemText>
                </ListItem>
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick={event =>
                    db.collection('todos').doc(props.todo.id).delete()
                }></DeleteForeverIcon>
            </List>
        </>
    )
}

export default Todo

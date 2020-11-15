// rfce = React Functional Component w/ export

import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'
import './Todo.css'
import React, { useState } from 'react'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { makeStyles } from '@material-ui/core/styles'

// how you style things with material UI
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}))

function Todo(props) {
    const classes = useStyles();
    // keep track of what open is 
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("")

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
            // prevents you from overwriting what was in there
        }, { merge: true })
        // update new TODO with new input text
        setOpen(false)
    }


    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>open</h1>
                    <input value={input} onChange={event => setInput(event.target.value)} placeholder={props.todo.todo} />
                    <Button onClick={updateTodo}>Update Todo</Button>
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

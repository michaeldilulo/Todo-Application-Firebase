// rfce = React Functional Component w/ export

import React from 'react'

function Todo(props) {
    return (
        <div>
            <li>{props.name}</li>
        </div>
    )
}

export default Todo

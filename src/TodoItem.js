import React from 'react'; 

// to use different properties, pass in the object "props" as an argument.
function TodoItem(props) {
    return (
        <div className = "todo">
            { 
            props.completed ? 
            <input type = "checkbox" checked /> : <input type = "checkbox" />
            }
            <p> {props.item} </p> 
        </div>
    )
}

// class TodoItem extends React.Component {}
export default TodoItem; 
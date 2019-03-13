import React, { Component } from 'react'; 

class JokeItem extends Component {

    render() {
        return (
            <div>
            <h1 className = "question"> {this.props.item.question} </h1>
            <h2 className = "punch"> {this.props.item.punchLine} </h2> 
            </div>
        )
    }
}

export default JokeItem
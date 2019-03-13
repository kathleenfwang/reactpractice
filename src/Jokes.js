import React from 'react'; 
import jokesData from './jokesData'; 
import JokeItem from './JokeItem'; 
/*
function Jokes () {
    return jokesData.map( x => {
        return (
        <div>
            <h1 className = "question"> {x.question} </h1>
            <h2 className = "punch"> {x.punchLine} </h2> 
            <hr/>
        </div>
        )
    })
}
*/
function toggle() {
    console.log('hi')
}
class Jokes extends React.Component {
    constructor() {
        super()
        this.state = {
          jokes:jokesData
        }
    }

    render() {
        const jokeList = this.state.jokes.map( (joke) =>  
            {
               return <JokeItem key= {joke.id} item = {joke} />
            })

        return (
            <div id>
                <button className = "button" onClick = {toggle}> Open the console! </button> 
               {jokeList} 
            </div>
        )
    
}
}
export default Jokes; 
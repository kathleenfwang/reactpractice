import React, {Component} from 'react'; 
 

/*function Header() {
    return (
        <header className = "navbar"> Welcome to my react site! </header> 
    )
}
*/

class Header extends Component {
    render() {
        return (
            <header className = "navbar"> {this.props.text}</header> 
        )
    }
}

export default Header; 
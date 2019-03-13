import React from 'react'; 
import App from './App';
import Time from './Time';
import Footer from './Footer';
import Header from './Header';
import Jokes from './Jokes'

// add in any props to these areas 
function MyApp() {
	return (
	<div>
	<Header text="Welcome to Kathleen's react site! " />
	<Time />
	<Header text ="Jokes!" />
	<Jokes />
	<Header text ="ToDo List" />
	<App />
	<Footer />
	</div>
	)
}

export default MyApp
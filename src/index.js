import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MyApp from './MyApp';
 

// rendering MyApp 
ReactDOM.render(
	<MyApp /> , document.getElementById("root")
	)

//rendering <App /> that was imported
//ReactDOM.render(<App> </App>, document.getElementById('root'));

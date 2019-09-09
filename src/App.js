import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

function App() {
	return (
		<Fragment>
			<Navbar />
			<div className='container'>
				<Users />
			</div>
		</Fragment>
	);
}

export default App;

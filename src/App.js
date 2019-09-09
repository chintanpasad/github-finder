import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

function App() {
	return (
		<Fragment>
			<Navbar />
			<div className='container'>
				<UserItem />
			</div>
		</Fragment>
	);
}

export default App;

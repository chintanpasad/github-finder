import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		showAlert: PropTypes.func.isRequired
	};
	state = {
		text: ''
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.text.length === 0) {
			this.props.showAlert('Please enter something', 'light');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text'
						placeholder='Search users...'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
				{this.props.showClear && (
					<button
						className='btn btn-light btn-block'
						onClick={this.props.clearUsers}
					>
						Clear
					</button>
				)}
			</div>
		);
	}
}

export default Search;

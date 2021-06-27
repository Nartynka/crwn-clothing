import React from 'react';

import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}
	handleSubmit = e => {
		e.preventDefault();

		this.setState({ email: '', password: '' });
	};
	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<h1>Aleready have account</h1>
				<form onSubmit={this.chandleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<input type='submit' value='submit' />
				</form>
			</div>
		);
	}
}

export default SignIn;

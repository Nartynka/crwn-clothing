import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}
	handleSubmit = async e => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert(`Passwords don't match`);
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (e) {
			console.log('Error while registering user', e);
			alert(e.message);
		}
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I don't have account</h2>
				<span>Create account here with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='displayName'
						type='text'
						value={displayName}
						handleChange={this.handleChange}
						label='display name'
						required
					/>
					<FormInput
						name='email'
						type='email'
						value={email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<FormInput
						name='confirmPassword'
						type='password'
						value={confirmPassword}
						handleChange={this.handleChange}
						label='confirm password'
						required
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;

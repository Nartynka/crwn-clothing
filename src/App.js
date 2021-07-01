import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserDocument } from './firebase/firebase.utils';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			//if user is not null (exist)
			if (user) {
				const userRef = await createUserDocument(user);
				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: { id: snapshot.id, ...snapshot.data() }
					});
				});
			} else this.setState({ currentUser: user });
			//else set currentUser to null
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;

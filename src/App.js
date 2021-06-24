import './App.css';

import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => <h1>HATS</h1>;

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/hats' component={HatsPage} />
		</div>
	);
}

export default App;

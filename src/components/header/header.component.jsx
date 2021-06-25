import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import Cart from '../cart/cart.component';

import './header.styles.scss';

const Header = () => (
	<div className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo' />
		</Link>
		<ul className='options'>
			<Link to='/shop' className='option'>
				SHOP
			</Link>
			<Link to='/contact' className='option'>
				CONTACT
			</Link>
			<Link to='/sign' className='option'>
				SIGN IN
			</Link>
		</ul>
	</div>
);

export default Header;

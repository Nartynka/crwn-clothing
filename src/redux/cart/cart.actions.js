import { CartActionTypes } from './cart.types';

// export const toggleCartHidden = () => ({
// 	type: CartActionTypes.TOGGLE_CART_HIDDEN
// });

export const toggleCartHidden = () => {
	console.log('action involed');
	return {
		type: CartActionTypes.TOGGLE_CART_HIDDEN
	};
};

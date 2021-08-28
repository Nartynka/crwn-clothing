import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
	hidden: true,
	// quanity:
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };
		// case CartActionTypes.SET_QUANITY:
		// 	return {...state, state.payload}
		default:
			return state;
	}
};

export default cartReducer;

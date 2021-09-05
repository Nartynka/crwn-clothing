export const addItemToCart = (cartItems, itemToAdd) => {
	//check if itemToAdd is a new item
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === itemToAdd.id
	);

	if (existingCartItem) {
		//if itemToAdd isn't new item then return new array with incresed quantity of this item
		return cartItems.map(
			cartItem =>
				cartItem.id === itemToAdd.id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
		);
	}
	//else add quantity to new item and return new array with this item
	return [ ...cartItems, { ...itemToAdd, quantity: 1 } ];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
	//check if itemToRemove existing
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === itemToRemove.id
	);

	//if quantity of that item is 1 then remove item
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
	}

	//else decrease quantity of that item
	return cartItems.map(
		cartItem =>
			cartItem.id === itemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
	);
};

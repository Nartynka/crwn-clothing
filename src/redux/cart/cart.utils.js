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
   //if itemToAdd is new item, add quantity to new item and return new array with this item
	return [ ...cartItems, { ...itemToAdd, quantity: 1 } ];
};

import React, { useContext, useReducer } from "react";

const CartContext = React.createContext();
const SetCartContext = React.createContext();

export const CART_ACTIONS = {
	ADD: "add",
	DELETE: "delete",
};

export function useCart() {
	return useContext(CartContext);
}

export function useSetCart() {
	return useContext(SetCartContext);
}

function reducer(cart, action) {
	switch (action.type) {
		case CART_ACTIONS.ADD:
			const existId = cart.findIndex((item) => {
				return item.id === action.item.id;
			});
			if (existId >= 0) {
				cart[existId].qty += action.item.qty;
				return [...cart];
			} else {
				return [...cart, action.item];
			}
		case CART_ACTIONS.DELETE:
			return cart.filter((item) => {
				return item.id !== action.id;
			});
		default:
			return cart;
	}
}

export function CartProvider({ children }) {
	const [cart, setCart] = useReducer(reducer, [
		{
			id: 1,
			thumb: "./images/image-product-1-thumbnail.jpg",
			name: "Fall Limited Edition Sneakers",
			price: 125,
			qty: 3,
		},
		{
			id: 2,
			thumb: "./images/image-product-2-thumbnail.jpg",
			name: "Second fake item",
			price: 250,
			qty: 1,
		},
	]);

	return (
		<CartContext.Provider value={cart}>
			<SetCartContext.Provider value={setCart}>{children}</SetCartContext.Provider>
		</CartContext.Provider>
	);
}

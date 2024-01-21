import { type Product, discountCodes } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartState = {
	total: number;
	items: (Product & { count: number })[];
	discountCodes: string[];
	discountMessage: string;
};

const initialState: CartState = {
	total: 0,
	items: [],
	discountCodes: discountCodes,
	discountMessage: "",
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart(state, action: PayloadAction<Product>) {
			const product = state.items.find((item) => item.id === action.payload.id);
			if (product) product.count++;
			else state.items.push({ ...action.payload, count: 1 });
			state.total += action.payload.price;
		},
		removeProductFromCart(state, action: PayloadAction<string>) {
			const product = state.items.find((product) => product.id === action.payload);
			if (!product) return;
			if (product.count === 1) state.items.splice(state.items.indexOf(product), 1);
			else product.count--;
			state.total -= product.price;
		},
		clearCart(state) {
			state = initialState;
		},
		applyDiscount(state, action: PayloadAction<string>) {
			if (state.items.length > 0 && state.discountCodes.includes(action.payload)) {
				state.total = state.total * 0.8;
				state.discountCodes.splice(state.discountCodes.indexOf(action.payload), 1);
				state.discountMessage = "Discount code applied.";
			} else {
				state.discountMessage =
					state.items.length === 0 ? "No products in cart." : "Incorrect discount code.";
			}
		},
	},
});

export const { addProductToCart, removeProductFromCart, clearCart, applyDiscount } =
	cartSlice.actions;

export const getCartCount = (state: RootState) =>
	state.cart.items.reduce((prev, curr) => prev + curr.count, 0);

export default cartSlice.reducer;

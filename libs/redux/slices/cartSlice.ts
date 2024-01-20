import { type Product } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartState = {
	count: number;
	items: Omit<Product, "description">[];
};

const initialState = {
	count: 0,
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart(state, action: PayloadAction<Product>) {},
		clearCart() {},
	},
});

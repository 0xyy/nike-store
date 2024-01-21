"use client";
import { Product } from "@/constants";
import Button from "../base/Button";
import { useAppDispatch } from "@/libs/hooks/redux";
import { addProductToCart } from "@/libs/redux/slices/cartSlice";
import toast from "react-hot-toast";

const AddToCartButton = ({ product }: { product: Product }) => {
	const dispatch = useAppDispatch();

	const addToCartHandler = () => {
		dispatch(addProductToCart(product));
		toast.success("Product added to cart!");
	};

	return <Button label="Add to cart" className="mt-auto w-fit" onClick={addToCartHandler} />;
};

export default AddToCartButton;

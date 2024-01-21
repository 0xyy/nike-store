"use client";
import { Product } from "@/constants";
import { useAppDispatch } from "@/libs/hooks/redux";
import { formatPrice } from "@/utils/format-price";
import Image from "next/image";
import Link from "next/link";
import Button from "../base/Button";
import { addProductToCart, removeProductFromCart } from "@/libs/redux/slices/cartSlice";

const CartProduct = ({
	product,
}: {
	product: Product & {
		count: number;
	};
}) => {
	const { name, imgUrl, id, count, price } = product;

	const dispatch = useAppDispatch();

	const addClickHandler = () => {
		dispatch(addProductToCart(product));
	};

	const removeClickHandler = () => {
		dispatch(removeProductFromCart(id));
	};

	return (
		<li className="flex border-b py-10">
			<Link href={`/product/${id}`}>
				<Image
					src={imgUrl}
					width={150}
					height={130}
					alt={name}
					className="transition-transform hover:scale-105"
				/>
			</Link>

			<div className="ml-5 flex flex-col">
				<h2 className="text-2xl font-semibold text-coral-green">{name}</h2>
				<p>{formatPrice(count * price)}</p>
				<div className="mt-auto flex w-fit items-center gap-2">
					<Button label="-" className="h-5 w-5 gap-0 px-4" onClick={removeClickHandler} />

					<span className="text-[23px]">{count}</span>
					<Button label="+" className="h-5 w-5 gap-0 px-4" onClick={addClickHandler} />
				</div>
			</div>
		</li>
	);
};

export default CartProduct;

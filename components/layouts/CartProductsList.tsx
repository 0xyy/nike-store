"use client";

import { useAppSelector } from "@/libs/hooks/redux";
import CartProduct from "../common/CartProduct";

const CartProductsList = () => {
	const products = useAppSelector((state) => state.cart.items);

	return (
		<>
			{products.length > 0 ? (
				<ul className="mt-12 flex flex-col gap-5">
					{products.map((product) => (
						<CartProduct key={product.id} product={product} />
					))}
				</ul>
			) : (
				<p className="mt-10 text-lg">Currently no items in cart.</p>
			)}
		</>
	);
};

export default CartProductsList;

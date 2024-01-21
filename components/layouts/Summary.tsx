"use client";
import { useAppDispatch, useAppSelector } from "@/libs/hooks/redux";
import Button from "../base/Button";
import { formatPrice } from "@/utils/format-price";
import { FormEvent, useId, useState } from "react";
import { applyDiscount } from "@/libs/redux/slices/cartSlice";

const Summary = () => {
	const { total, discountMessage } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	const id = useId();
	const [discountCode, setDiscountCode] = useState("");

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!discountCode) return;
		dispatch(applyDiscount(discountCode));
	};

	return (
		<div className="mt-2 h-fit w-full rounded-lg bg-pale-blue p-5 py-5 shadow-md lg:mt-0 lg:w-2/5">
			<h3 className="font-palanquin text-3xl font-semibold">Summary</h3>
			<p className="text-xl">Total: {formatPrice(total)}</p>
			<form className="my-4 flex flex-col gap-2" onSubmit={submitHandler}>
				<label htmlFor={id}>Discount code:</label>
				<div className="flex h-[30px] items-center">
					<input
						name="discountCode"
						type="text"
						id={id}
						value={discountCode}
						className="h-full rounded-l-lg px-2 py-1 text-coral-green outline-none focus:ring-1 focus:ring-coral-green"
						placeholder="Enter discount code"
						onChange={(e) => setDiscountCode(e.target.value)}
					/>
					<Button
						label="Apply"
						type="submit"
						className="text-md h-full rounded-none rounded-r-md px-3"
					/>
				</div>
				{discountMessage && <span className="text-gray-500">{discountMessage}</span>}
			</form>
			<Button label="Next" fullWidth />
		</div>
	);
};

export default Summary;

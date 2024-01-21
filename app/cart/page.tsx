import Button from "@/components/base/Button";
import CartProductsList from "@/components/layouts/CartProductsList";
import Summary from "@/components/layouts/Summary";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
	return (
		<section className="padding max-container flex min-h-screen flex-col gap-10 lg:flex-row">
			<div className="lg:flex-3/5 w-full">
				<Link
					href="/"
					className="text-md flex cursor-pointer items-center justify-start gap-1 text-gray-500"
				>
					<MoveLeftIcon size={17} />
					Back Home
				</Link>
				<h1 className="font-palanquin mt-6 text-4xl font-bold">Your Shopping Cart</h1>
				<CartProductsList />
			</div>
			<Summary />
		</section>
	);
}

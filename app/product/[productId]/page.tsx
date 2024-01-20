"use client";
import { star } from "@/assets/icons";
import Button from "@/components/base/Button";
import PopularProductCard from "@/components/common/PopularProductCard";
import { PopularProducts } from "@/components/layouts";
import { products } from "@/constants";
import { MoveLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductDetails({
	params: { productId },
}: {
	params: { productId: string };
}) {
	const product = products.find((product) => product.id === productId);

	if (!product) return notFound();

	const { imgUrl, name, description } = product;

	return (
		<section className="padding max-container flex flex-col">
			<Link
				href="/"
				className="text-md mb-12 flex cursor-pointer items-center justify-start gap-1 text-gray-500"
			>
				<MoveLeftIcon size={17} />
				Back Home
			</Link>
			<div className="flex flex-col gap-5 lg:flex-row">
				<div className="flex flex-col">
					<Image src={imgUrl} alt={name} width={400} height={400} />
				</div>
				<div className="ml-0 flex flex-col lg:ml-12">
					<h1 className="text-palanquin text-4xl font-bold text-coral-green">{name}</h1>
					<div className="mt-2 flex justify-start gap-2.5">
						<Image src={star} alt="rating" width={24} height={24} />
						<p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
					</div>
					<p className="info-text font-montserrat mb-5 mt-4 lg:max-w-lg">{description}</p>
					<Button label="Add to cart" className="mt-auto w-fit" />
				</div>
			</div>
			<div className="mt-48 ">
				<h3 className="text-palanquin mb-4 text-3xl font-bold text-coral-green">
					Other Similar Products
				</h3>
				<div className="grid grid-cols-1 gap-14 sm:grid-cols-1 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
					{products
						.filter((product) => product.id !== productId)
						.map((product) => (
							<PopularProductCard key={product.name} {...product} />
						))}
				</div>
			</div>
		</section>
	);
}

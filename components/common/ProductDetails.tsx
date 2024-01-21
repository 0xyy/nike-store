import Image from "next/image";
import Button from "../base/Button";
import { star } from "@/assets/icons";
import { Product } from "@/constants";
import { formatPrice } from "@/utils/format-price";
import AddToCartButton from "./AddToCartButton";

const ProductDetails = ({ product }: { product: Product }) => {
	const { name, price, description, imgUrl, id } = product;

	return (
		<div className="flex flex-col gap-5 lg:flex-row">
			<div className="flex flex-col">
				<Image src={imgUrl} alt={name} width={400} height={400} />
			</div>
			<div className="ml-0 flex flex-col lg:ml-12">
				<h1 className="text-palanquin text-4xl font-bold text-coral-green">{name}</h1>
				<p className="font-montserrat my-2 text-xl font-semibold">{formatPrice(price)}</p>
				<div className="mt-2 flex justify-start gap-2.5">
					<Image src={star} alt="rating" width={24} height={24} />
					<p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
				</div>
				<p className="info-text font-montserrat mb-5 mt-4 lg:max-w-lg">{description}</p>
				<AddToCartButton product={product} />
			</div>
		</div>
	);
};

export default ProductDetails;

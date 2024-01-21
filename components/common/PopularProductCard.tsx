import Image from "next/image";

import { star } from "@/assets/icons";
import type { Product } from "@/constants";
import { formatPrice } from "@/utils/format-price";
import Link from "next/link";

const PopularProductCard = ({ id, imgUrl, name, price }: Product) => {
	return (
		<Link href={`/product/${id}`}>
			<div className="flex w-full flex-1 flex-col rounded-lg max-sm:w-full">
				<Image
					src={imgUrl}
					alt={name}
					width={280}
					height={280}
					className="transition-transform hover:scale-105"
				/>

				<div className="mt-8 flex justify-start gap-2.5">
					<Image src={star} alt="rating" width={24} height={24} />
					<p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
				</div>
				<h3 className="font-palanquin mt-2 text-2xl font-semibold leading-normal">{name}</h3>
				<p className="font-montserrat mt-2 text-2xl font-semibold leading-normal text-coral-green">
					{formatPrice(price)}
				</p>
			</div>
		</Link>
	);
};

export default PopularProductCard;

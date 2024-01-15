import Image from "next/image";

import { star } from "@/assets/icons";

const PopularProductCard = ({
	imgUrl,
	name,
	price,
}: {
	imgUrl: any;
	name: string;
	price: string;
}) => {
	return (
		<div className="flex w-full flex-1 flex-col max-sm:w-full">
			<Image src={imgUrl} alt={name} width={280} height={280} />
			<div className="mt-8 flex justify-start gap-2.5">
				<Image src={star} alt="rating" width={24} height={24} />
				<p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
			</div>
			<h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">{name}</h3>
			<p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
				{price}
			</p>
		</div>
	);
};

export default PopularProductCard;

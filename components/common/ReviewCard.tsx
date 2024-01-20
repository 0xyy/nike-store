import { star } from "@/assets/icons";
import Image, { StaticImageData } from "next/image";

export type ReviewCardProps = {
	imgUrl: StaticImageData;
	customerName: string;
	rating: number;
	feedback: string;
};

const ReviewCard = ({ imgUrl, customerName, rating, feedback }: ReviewCardProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Image
				src={imgUrl}
				alt="customer"
				width={120}
				height={120}
				className="rounded-full object-cover"
			/>
			<p className="info-text font-montserrat mt-6 max-w-sm text-center">{feedback}</p>
			<div className="mt-3 flex items-center justify-center gap-2.5">
				<Image src={star} alt="star" width={24} height={24} className="m-0 object-contain" />
				<p className="font-montserrat text-xl text-slate-gray">({rating})</p>
			</div>
			<h3 className="font-palanquin mt-1 text-center text-3xl font-bold">{customerName}</h3>
		</div>
	);
};

export default ReviewCard;

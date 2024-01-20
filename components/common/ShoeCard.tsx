import { clsx } from "clsx";
import Image, { StaticImageData } from "next/image";

const ShoeCard = ({
	imgUrl,
	changeBigShoeImage,
	bigShoeImg,
}: {
	imgUrl: { thumbnail: any; bigShoe: StaticImageData };
	changeBigShoeImage: (shoe: StaticImageData) => void;
	bigShoeImg: StaticImageData;
}) => {
	const handleClick = () => {
		if (bigShoeImg !== imgUrl.bigShoe) {
			changeBigShoeImage(imgUrl.bigShoe);
		}
	};

	return (
		<div
			className={clsx(
				"cursor-pointer rounded-xl border-2 max-sm:flex-1",
				bigShoeImg === imgUrl.bigShoe ? "border-coral-green" : "border-transparent",
			)}
			onClick={handleClick}
		>
			<div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
				<Image
					src={imgUrl.thumbnail}
					alt="shoe collection"
					width={127}
					height={103}
					className="object-contain"
				/>
			</div>
		</div>
	);
};

export default ShoeCard;

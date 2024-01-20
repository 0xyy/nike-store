import Image from "next/image";

const ServiceCard = ({
	imgUrl,
	label,
	subtext,
}: {
	imgUrl: any;
	label: string;
	subtext: string;
}) => {
	return (
		<div className="w-full flex-1 rounded-[20px] px-10 py-16 shadow-3xl sm:w-[350px] sm:min-w-[350px]">
			<div className="bg-coral-green flex h-11 w-11 items-center justify-center rounded-full">
				<Image src={imgUrl} alt={label} width={24} height={24} />
			</div>
			<h3 className="font-palanquin mt-5 text-3xl font-bold leading-normal">{label}</h3>
			<p className="font-montserrat mt-3 break-words text-lg leading-normal text-slate-gray">
				{subtext}
			</p>
		</div>
	);
};

export default ServiceCard;

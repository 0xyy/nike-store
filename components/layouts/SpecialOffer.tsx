import Image from "next/image";

import Button from "@/components/base/Button";

import { arrowRight } from "@/assets/icons";
import { offer } from "@/assets/images";

const SpecialOffer = () => {
	return (
		<section className="max-container flex items-center justify-center gap-10 max-xl:flex-col-reverse">
			<div className="flex-1">
				<Image src={offer} alt="offer" width={773} height={687} className="w-full object-contain" />
			</div>
			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
					<span className="text-coral-green">Special</span> Offer
				</h2>
				<p className="info-text font-montserrat mt-4 lg:max-w-lg">
					Embark on a shopping journey that redefines your experience with unbeatable deals. From
					premier selections to incredible savings, we offer unparalleled value that sets us apart.
				</p>
				<p className="info-text font-montserrat mt-6 lg:max-w-lg">
					Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the
					loftiest expectations. Your journey with us is nothing short of exceptional.
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="Shop now" iconUrl={arrowRight} />
					<Button
						label="Learn more"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;

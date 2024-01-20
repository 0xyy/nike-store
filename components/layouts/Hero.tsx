"use client";
import Image from "next/image";

import Button from "@/components/base/Button";

import { arrowRight } from "@/assets/icons";
import { shoes, statistics } from "@/constants";
import { bigShoe1 } from "@/assets/images";
import ShoeCard from "@/components/common/ShoeCard";
import { useState } from "react";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

	return (
		<section
			id="home"
			className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
		>
			<div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
				<p className="font-montserrat text-coral-green text-xl">Our Winter Collection</p>
				<h1 className="font-palanquin mt-10 text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
					<span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-green mt-3 inline-block">Nike</span> Shoes
				</h1>
				<p className="font-montserrat mb-14 mt-6 text-lg leading-8 text-slate-gray sm:max-w-sm">
					Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
				</p>
				<Button label="Shop now" iconUrl={arrowRight} />

				<div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
					{statistics.map((stat) => (
						<div key={stat.label}>
							<p className="font-palanquin text-4xl font-bold">{stat.value}</p>
							<p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
						</div>
					))}
				</div>
			</div>

			<div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
				<Image
					src={bigShoeImg}
					alt="shoe collection"
					width={610}
					height={500}
					className="relative z-10 object-contain"
				/>

				<div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
					{shoes.map((shoe, index) => (
						<div key={index}>
							<ShoeCard imgUrl={shoe} changeBigShoeImage={setBigShoeImg} bigShoeImg={bigShoeImg} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;

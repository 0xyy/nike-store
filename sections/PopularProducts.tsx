import PopularProductCard from "@/components/PopularProductCard";

import { products } from "@/constants";

const PopularProducts = () => {
	return (
		<section id="products" className="max-container max-sm:mt-12">
			<div className="gpa-5 flex flex-col justify-start">
				<h2 className="font-palanquin text-4xl font-bold">
					Our <span className="text-coral-purple">Popular</span> Products
				</h2>
				<p className="font-montserrat mt-2 text-slate-gray lg:max-w-lg">
					Experience top-notch quality and style with our sought-after selections. Discover a world
					of comfort, design and value
				</p>
			</div>

			<div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
				{products.map((product) => (
					<PopularProductCard key={product.name} {...product} />
				))}
			</div>
		</section>
	);
};

export default PopularProducts;

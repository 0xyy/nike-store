import PopularProductCard from "./PopularProductCard";
import { Product, products } from "@/constants";

const SimilarProducts = ({ productId }: { productId: Product["id"] }) => {
	return (
		<div className="mt-48">
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
	);
};

export default SimilarProducts;

import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeftIcon } from "lucide-react";

import { products } from "@/constants";
import ProductDetails from "@/components/common/ProductDetails";
import SimilarProducts from "@/components/common/SimilarProducts";

export default function ProductDetailsPage({
	params: { productId },
}: {
	params: { productId: string };
}) {
	const product = products.find((product) => product.id === productId);

	if (!product) return notFound();

	return (
		<section className="padding max-container flex flex-col">
			<Link
				href="/"
				className="text-md mb-12 flex cursor-pointer items-center justify-start gap-1 text-gray-500"
			>
				<MoveLeftIcon size={17} />
				Back Home
			</Link>
			<ProductDetails product={product} />
			<SimilarProducts productId={productId} />
		</section>
	);
}

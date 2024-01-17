import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/constants";

const CustomerReviews = () => {
	return (
		<section className="max-container">
			<div className="flex flex-col items-center">
				<h3 className="font-palanquin text-4xl font-bold capitalize">
					What Our
					<span className="text-coral-purple"> Customers </span>
					Say
				</h3>
				<p className="info-text margin-auto mt-4 max-w-lg text-center">
					Hear genuine stories from our satisfied customers about their exceptional experiences with
					us.
				</p>
			</div>

			<div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
				{reviews.map((review) => (
					<ReviewCard
						key={review.customerName}
						imgUrl={review.imgUrl}
						customerName={review.customerName}
						rating={review.rating}
						feedback={review.feedback}
					/>
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;

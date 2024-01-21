import { facebook, instagram, shieldTick, support, truckFast, twitter } from "@/assets/icons";
import {
	bigShoe1,
	bigShoe2,
	bigShoe3,
	customer1,
	customer2,
	shoe4,
	shoe5,
	shoe6,
	shoe7,
	thumbnailShoe1,
	thumbnailShoe2,
	thumbnailShoe3,
} from "@/assets/images";
import { v4 as uuidv4 } from "uuid";

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about-us", label: "About Us" },
	{ href: "#products", label: "Products" },
	{ href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
	{
		thumbnail: thumbnailShoe1,
		bigShoe: bigShoe1,
	},
	{
		thumbnail: thumbnailShoe2,
		bigShoe: bigShoe2,
	},
	{
		thumbnail: thumbnailShoe3,
		bigShoe: bigShoe3,
	},
];

export const statistics = [
	{ value: "1k+", label: "Brands" },
	{ value: "300+", label: "Shops" },
	{ value: "850k+", label: "Customers" },
];

export type Product = {
	id: string;
	imgUrl: any;
	name: string;
	description: string;
	price: number;
};

export const products = [
	{
		id: "4d4b8b0a-1034-4527-a3c4-eb19c596fb77",
		imgUrl: shoe4,
		name: "Nike Air Jordan",
		description:
			"The Nike Air Jordan, an iconic collaboration with basketball legend Michael Jordan, combines style and performance. With its sleek design, innovative technology, and a legacy rooted in the basketball courts, the Air Jordan series is a symbol of athleticism and streetwear fashion.",
		price: 200,
	},
	{
		id: "66af10e0-a15c-496a-88e3-4edd8286351b",
		imgUrl: shoe5,
		name: "Nike Dunk Low",
		description:
			"The Nike Dunk Low is a timeless classic, celebrated for its versatility and clean design. Originally designed for basketball, it has evolved into a cultural icon with its low-profile silhouette and vibrant colorways. Whether on the streets or the skate park, the Dunk Low offers comfort and style for any occasion.",
		price: 210.1,
	},
	{
		id: "749cad98-1002-41ff-94e4-1798a3f49dba",
		imgUrl: shoe6,
		name: "Nike Air Max",
		description:
			"The Nike Air Max series revolutionized sneaker design with its visible Air cushioning technology. Known for its exceptional comfort and distinctive aesthetic, Air Max shoes are a perfect blend of performance and style. From the track to the streets, the Air Max continues to be a symbol of innovation and fashion.",
		price: 220.2,
	},
	{
		id: "1d2fbd3f-5be2-438e-ad14-d90719993b84",
		imgUrl: shoe7,
		name: "Nike Air Force",
		description:
			"The Nike Air Force, a streetwear staple since its debut, boasts a sleek and timeless design. With its premium materials and iconic silhouette, the Air Force is a symbol of urban style and cultural significance. Whether in classic white or bold colors, these shoes are a must-have for sneaker enthusiasts.",
		price: 230.3,
	},
];

export const services = [
	{
		imgUrl: truckFast,
		label: "Free shipping",
		subtext: "Enjoy seamless shopping with our complimentary shipping service.",
	},
	{
		imgUrl: shieldTick,
		label: "Secure Payment",
		subtext: "Experience worry-free transactions with our secure payment options.",
	},
	{
		imgUrl: support,
		label: "Love to help you",
		subtext: "Our dedicated team is here to assist you every step of the way.",
	},
];

export const reviews = [
	{
		imgUrl: customer1,
		customerName: "Morich Brown",
		rating: 4.5,
		feedback:
			"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
	},
	{
		imgUrl: customer2,
		customerName: "Lota Mongeskar",
		rating: 4.5,
		feedback:
			"The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
	},
];

export const footerLinks = [
	{
		title: "Products",
		links: [
			{ name: "Air Force 1", link: "/" },
			{ name: "Air Max 1", link: "/" },
			{ name: "Air Jordan 1", link: "/" },
			{ name: "Air Force 2", link: "/" },
			{ name: "Nike Waffle Racer", link: "/" },
			{ name: "Nike Cortez", link: "/" },
		],
	},
	{
		title: "Help",
		links: [
			{ name: "About us", link: "/" },
			{ name: "FAQs", link: "/" },
			{ name: "How it works", link: "/" },
			{ name: "Privacy policy", link: "/" },
			{ name: "Payment policy", link: "/" },
		],
	},
	{
		title: "Get in touch",
		links: [
			{ name: "customer@nike.com", link: "mailto:customer@nike.com" },
			{ name: "+92554862354", link: "tel:+92554862354" },
		],
	},
];

export const socialMedia = [
	{ src: facebook, alt: "facebook logo" },
	{ src: twitter, alt: "twitter logo" },
	{ src: instagram, alt: "instagram logo" },
];

export const discountCodes = ["ODJ2", "1234", "PV01", "12MD"];

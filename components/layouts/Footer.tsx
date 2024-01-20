import { copyrightSign } from "@/assets/icons";
import { footerLogo } from "@/assets/images";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="max-container">
			<div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<Image src={footerLogo} alt="footer logo" width={150} height={46} />
					</a>
					<p className="font-montserrat sm:wax-w-sm mt-6 text-base leading-7 text-white-400">
						Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In
						Store. Get Rewards
					</p>
					<div className="mt-8 flex items-center gap-5">
						{socialMedia.map((icon) => (
							<div
								key={icon.alt}
								className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
							>
								<Image src={icon.src} alt={icon.alt} width={24} height={24} />
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
					{footerLinks.map((section) => (
						<div key={section.title}>
							<h4 className="font-montserrat mb-6 text-2xl leading-normal text-white">
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										key={link.name}
										className="font-montserrat mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray"
									>
										<a>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
				<div className="font-montserrat flex flex-1 cursor-pointer items-center justify-start gap-2">
					<Image
						src={copyrightSign}
						alt="copy right sign"
						width={20}
						height={20}
						className="m-0 rounded-full"
					/>
					<p>Copyright. All rights reserved.</p>
				</div>
				<p className="font-montserrat cursor-pointer">Terms & conditions</p>
			</div>
		</footer>
	);
};

export default Footer;

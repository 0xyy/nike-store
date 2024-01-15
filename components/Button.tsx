import { clsx } from "clsx";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
	label: string;
	iconUrl?: string;
	backgroundColor?: string;
	borderColor?: string;
	textColor?: string;
};

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }: ButtonProps) => {
	return (
		<button
			className={clsx(
				"flex items-center justify-center gap-2 rounded-full border  px-7 py-4 font-montserrat text-lg leading-none ",
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor}`
					: "border-coral-red bg-coral-red text-white",
			)}
		>
			{label}
			{iconUrl && (
				<Image
					src={iconUrl}
					alt="Arrow right icon"
					className="ml-2 h-5 w-5 rounded-full"
					width={30}
					height={30}
				/>
			)}
		</button>
	);
};

export default Button;

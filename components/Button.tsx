import { clsx } from "clsx";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
	label: string;
	iconUrl?: string;
	backgroundColor?: string;
	borderColor?: string;
	textColor?: string;
	fullWidth?: boolean;
};

const Button = ({
	label,
	iconUrl,
	backgroundColor,
	borderColor,
	textColor,
	fullWidth,
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				"font-montserrat flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-lg leading-none",
				fullWidth && "w-full",
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor}`
					: "border-coral-purple bg-coral-purple text-white",
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

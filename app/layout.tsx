import type { Metadata } from "next";
import { Montserrat, Palanquin } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const palanquin = Palanquin({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Nike Store",
	description: "Great example of Nike store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} ${palanquin.className}`}>
				<StoreProvider>{children}</StoreProvider>
				<Toaster />
			</body>
		</html>
	);
}

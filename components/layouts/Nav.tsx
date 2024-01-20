"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, ShoppingCart, X } from "lucide-react";

import { navLinks } from "@/constants";

import { headerLogo } from "@/assets/images";
import { clsx } from "clsx";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="padding-x fixed z-50 w-full bg-transparent py-8 backdrop-blur-lg backdrop-filter">
			<nav className="max-container flex items-center justify-between">
				<a href="/">
					<Image src={headerLogo} alt="Logo" width={130} height={29} />
				</a>

				{/* desktop nav */}
				<ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat text-lg leading-normal text-slate-gray transition-colors hover:text-gray-800"
							>
								{item.label}
							</a>
						</li>
					))}
					<li>
						<Link
							href="/cart"
							className="flex items-center justify-center gap-2 text-slate-gray transition-colors hover:text-gray-800"
						>
							<ShoppingCart size={20} />
							<span className="text-xl">1</span>
						</Link>
					</li>
				</ul>

				{/* mobile nav */}
				<ul
					className={clsx(
						"fixed left-0 top-0 z-50 flex h-screen w-[300px] translate-x-[-300px] flex-col items-center justify-center gap-8 bg-pale-blue transition-transform lg:hidden",
						isOpen && "translate-x-[0]",
					)}
				>
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat text-xl leading-normal text-slate-gray transition-colors hover:text-gray-800"
							>
								{item.label}
							</a>
						</li>
					))}
					<li>
						<Link
							href="/cart"
							className="flex items-center justify-center gap-2 text-slate-gray transition-colors hover:text-gray-800"
						>
							<ShoppingCart size={25} />
							<span className="text-2xl">1</span>
						</Link>
					</li>
				</ul>

				<div className="hidden max-lg:block">
					<span
						onClick={() => setIsOpen((prev) => !prev)}
						className="text-slate-gray transition-colors hover:text-gray-800"
					>
						{isOpen ? <X size={25} /> : <Menu size={25} />}
					</span>
				</div>
			</nav>
		</header>
	);
};

export default Nav;

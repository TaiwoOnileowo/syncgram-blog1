import { IconMenu2, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navLinks } from '../../lib/data';
import CTAButton from './CTAButton';

const Header = () => {
	const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL!;
	const logo = `${rootUrl}/logo-black.svg`;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	return (
		<header className="sticky top-0 z-20 backdrop-blur-sm">
			<div className="py-5">
				<div className="container mx-auto  ">
					<div className="flex items-center justify-between">
						<Link href={rootUrl} className="relative inline-flex">
							<Image src={logo} alt="logo" height={30} width={150} />
						</Link>
						<button
							onClick={toggleMenu}
							className="relative z-50 md:hidden"
							aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						>
							<IconMenu2
								className={`h-6 w-6 transition-opacity duration-300 ${
									isMenuOpen ? 'opacity-0' : 'opacity-100'
								}`}
							/>
							<IconX
								className={`absolute left-0 top-0 h-6 w-6 transition-opacity duration-300 ${
									isMenuOpen ? 'opacity-100' : 'opacity-0'
								}`}
							/>
						</button>
						<nav className="hidden items-center gap-6 text-black/60 md:flex">
							{navLinks.map((link, index) => (
								<Link key={index} href={link.href} className="transition-colors hover:text-black">
									{link.name}
								</Link>
							))}
							<CTAButton text="Start for free" />
						</nav>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-40 flex h-fit flex-col bg-white md:hidden"
					>
						<div className="container mx-auto flex-grow overflow-y-auto px-4 py-8">
							<nav className="flex h-full flex-col items-center justify-center gap-6">
								{navLinks.map((link, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={link.href}
											className="text-2xl font-semibold text-black/60 transition-colors hover:text-black"
											onClick={toggleMenu}
										>
											{link.name}
										</Link>
									</motion.div>
								))}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: navLinks.length * 0.1 }}
								>
									<CTAButton text="Start for free" onClick={toggleMenu} />
								</motion.div>
							</nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;

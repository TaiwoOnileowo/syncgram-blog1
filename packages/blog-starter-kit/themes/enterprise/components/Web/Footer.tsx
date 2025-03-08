import { footerLinks, socialLinks } from '@/lib/data';
import { getYear } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
	const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL;
	const logo = `${rootUrl}/logo-white.svg`;
	return (
		<footer className="bg-black py-10 text-center text-sm text-[#bcbcbc]">
			<div className="container">
				<Link href="/" className="relative inline-flex ">
					<Image src={logo} alt="logo" height={30} width={150} />
				</Link>
				<nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
					{footerLinks.map((link, index) => (
						<a key={index} href={link.href}>
							{link.name}
						</a>
					))}
				</nav>
			</div>
			<div className="mt-6 flex justify-center gap-6">
				{socialLinks.map((link, index) => (
					<a key={index} href={link.href}>
						{link.icon}
					</a>
				))}
			</div>
			<p className="mt-6">
				&copy; {getYear(Date.now())} <Link href="/">SyncGram</Link>, LLC. All rights reserved
			</p>
		</footer>
	);
};
export default Footer;

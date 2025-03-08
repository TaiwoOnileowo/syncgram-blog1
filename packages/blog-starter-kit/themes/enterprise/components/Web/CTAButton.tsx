import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Button } from '../ui/button';
const CTAButton = ({
	text,
	className,
	link,
	onClick,
}: {
	text: string;
	className?: string;
	link?: string;
	onClick?: () => void;
}) => {
	const ctaLink = process.env.NEXT_PUBLIC_CTA_LINK;
	return (
		<Link href={link ?? ctaLink ?? 'https://t.me/SyncGramBot?start=welcome'} onClick={onClick}>
			<Button className={twMerge('btn btn-primary w-[120px]', className)}>{text}</Button>
		</Link>
	);
};
export default CTAButton;

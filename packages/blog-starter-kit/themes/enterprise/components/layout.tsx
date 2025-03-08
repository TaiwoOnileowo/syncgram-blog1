import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import Footer from './Web/Footer';
import Header from './Web/Header';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="min-h-screen bg-[linear-gradient(to_bottom,#fff,#D2DCFF)] dark:bg-neutral-950">
				<Header />
				<main className="container">{children}</main>
				<Footer />
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};

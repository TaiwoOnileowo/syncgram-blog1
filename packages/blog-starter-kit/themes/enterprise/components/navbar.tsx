import { Search } from './searchbar';

export const Navbar = () => {
	return (
		<div className="flex w-full items-center justify-center gap-5 pt-5 text-sm">
			<Search />
		</div>
	);
};

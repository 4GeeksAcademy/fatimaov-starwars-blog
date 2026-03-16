import { Link } from "react-router-dom";
import { FavoritesDropdown } from "./FavoritesDropdown";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				< FavoritesDropdown />
			</div>
		</nav>
	);
};
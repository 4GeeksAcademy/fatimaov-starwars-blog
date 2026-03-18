import { Link } from "react-router-dom";
import { FavoritesDropdown } from "./FavoritesDropdown";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="d-flex justify-content-between align-items-center w-100 mx-5">
				<Link to="/">
					<div className="navbar-brand mb-0 h1 w-25">
						<img className="img-fluid w-100" src="https://images.seeklogo.com/logo-png/13/1/star-wars-logo-png_seeklogo-131743.png" alt="" />
					</div>
				</Link>
				< FavoritesDropdown />
			</div>
		</nav>
	);
};
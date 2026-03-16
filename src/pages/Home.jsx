import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}; 
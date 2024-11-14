import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container d-flex justify-content-end mt-3"> 
			<Link to={"add-contact"} className="btn btn-success">
				Add Contact
			</Link>
		</nav>
	);
};

import React from "react";
import "./Header.css";
import logo from "../img/wishlist.jpg";

const header = () => {
	return (
		<div className="header">
			<img className="resize" src={logo} />
			<div className="headerTitle">Wishlister</div>
			<div className="about">About</div>
		</div>
	);
};

export default header;

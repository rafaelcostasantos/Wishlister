import React from "react";
import "./Product.css";

const showList = props => {
	return (
		<div className="product">
			<p>Product: {props.name} </p>
			<p>Price: {props.price}</p>
		</div>
	);
};

export default showList;

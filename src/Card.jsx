import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./HomePage.css";

function ProductCard(props) {
	return (
		<Card style={{ width: "18rem" }}>
			<img src={props.image} alt={props.title} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ProductCard;

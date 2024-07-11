import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import "./HomePage.css";
import { NavLink } from "react-router-dom";

function NotFound() {
	return (
		<Container>
			<div className="border border-dark p-5 bg-white">
				<h1 className="heading">404 Not Found</h1>
				<Image
					src="https://picsum.photos/id/20/500/300"
					fluid
					className="mb-4"
				/>
				<Row className="product-row">
					<Col className="g-col-6">
						<h2>Page not found!</h2>
					</Col>
				</Row>
				<NavLink to="/Home" activeClassName="active" className="navLink">
					<Button variant="primary" className="shop-btn shadow-sm">
						Back to Home
					</Button>
				</NavLink>
			</div>
		</Container>
	);
}

export default NotFound;

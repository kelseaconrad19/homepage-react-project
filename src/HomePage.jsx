import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import "./HomePage.css";
import ProductCard from "./Card";

function HomePage() {
	return (
		<Container>
			<div className="border border-dark p-5 bg-white">
				<h1 className="heading">Welcome!</h1>
				<Image
					src="https://picsum.photos/id/20/500/300"
					fluid
					className="mb-4"
				/>
				<Row className="product-row">
					<Col className="g-col-6">
						<ProductCard
							image="https://picsum.photos/200"
							title="Product 1"
							description="This is a description of product 1."
						/>
					</Col>
					<Col className="g-col-6">
						<ProductCard
							image="https://picsum.photos/200"
							title="Product 2"
							description="This is a description of product 2."
						/>
					</Col>
					<Col className="g-col-6">
						<ProductCard
							image="https://picsum.photos/200"
							title="Product 3"
							description="This is a description of product 3."
						/>
					</Col>
				</Row>
				<Button variant="primary" className="shop-btn shadow-sm">
					Shop Now
				</Button>
			</div>
		</Container>
	);
}

export default HomePage;

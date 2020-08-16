import React from "react";
import Container from "react-bootstrap/Container";
import "./portfolio.css";
import Portcard from "../Portcard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio() {
	return (
			<Container fluid className="portfolio">
				<Row>
					<Col><h2 className="text-center portfolioText">Portfolio</h2></Col>
				</Row>
				<Row sm={1} md={3} className="cardDiv">
					<Portcard />
					<Portcard />
					<Portcard />
					<Portcard />
					<Portcard />
					<Portcard />
				</Row>
			</Container>
	);
}

export default Portfolio;

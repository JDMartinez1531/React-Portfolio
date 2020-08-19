import React from "react";
import Container from "react-bootstrap/Container";
import "./portfolio.css";
import Portcard from "../Portcard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio(props) {
	const portCardList = props.portfolio.map((project) => (
		<Portcard
			key={project.id}
			title={project.title}
			url={project.url}
			repo={project.repository}
			imageLocation={project.image}
			text={project.text}
		/>
	));
	return (
		<Container fluid className="portfolio" id="portfolio">
			<Row>
				<Col>
					<h2 className="text-center portfolioText">Portfolio</h2>
				</Col>
			</Row>
			<Row sm={1} md={3} className="cardDiv">
				{portCardList}
			</Row>
		</Container>
	);
}

export default Portfolio;

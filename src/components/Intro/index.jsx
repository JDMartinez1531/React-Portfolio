import React from "react";
import "./intro.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Intro() {
	return (
		<Container fluid className="intro">
			<Row>
				<Col>
					<h1 className="name">Joshua Martinez</h1>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<p className="intro-text">
						Lorem ipsum dolor sit amet, dicat propriae mei ea, duo at enim dolor
						referrentur, te posse pericula pri. Ei vix nonumes dissentias, dolor
						legere consectetuer quo te. Lorem nostro gubergren ad quo. Et
						insolens instructior his, vis odio propriae gubergren in, cu rebum
						erroribus consequuntur mel. Te sed nobis graeco. Ridens iriure vix
						at. Ut pro graeco aliquip, ei sapientem temporibus vel. Possim
						eripuit ut nec, id ponderum voluptatibus quo. Ea dicit tibique
						periculis mea, phaedrum
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Intro;

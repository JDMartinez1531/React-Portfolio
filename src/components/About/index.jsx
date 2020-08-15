import React from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profileImage from "../../images/profile-05.jpg";

function About() {
	return (
		<Container fluid className="about-section">
			<Row>
				<Col xs={6} md={4}>
					<Image src={profileImage} roundedCircle />
				</Col>
				<Col className="about-text">
					<h1>About me</h1>
					<p className="aboutP">
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

export default About;

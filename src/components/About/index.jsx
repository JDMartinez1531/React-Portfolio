import React from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profileImage from "../../images/profile-05.jpg"

function About() {
	return (
		<Container className="about-section">
			<Row>
				<Col xs={6} md={4}>
					<Image src={profileImage} roundedCircle />
				</Col>
                <Col><h1>About me</h1></Col>
			</Row>
		</Container>
	);
}

export default About;

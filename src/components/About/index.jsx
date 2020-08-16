import React from "react";
import "./about.css";
import profileImage from "../../images/profile-05.jpg";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";

function About() {
	return (
		<Media className="about">
			<Image src={profileImage} roundedCircle className="align-self-center mr-3 aboutImage" />
			<Media.Body className="align-self-center aboutText">
				<h5>Media Heading</h5>
				<p>
					Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
					scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
				</p>
			</Media.Body>
		</Media>
	);
}

export default About;

/* <Container fluid className="about-section">
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
		</Container> */


		// <img
		// 		width={150}
		// 		height={150}
		// 		borderRadius={50}
		// 		className="profile align-self-center ml-4 mr-3"
		// 		src={profileImage}
		// 		alt="handsome guy"
		// 	/>
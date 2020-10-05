import React from "react";
import "./about.css";
import profileImage from "../../images/profile-05.jpg";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/files/jdmresume2020.pdf";

function About() {
	return (
		<Media className="about" id="about">
			<Image
				src={profileImage}
				roundedCircle
				className="align-self-center mr-3 aboutImage"
			/>
			<Media.Body className="align-self-center aboutText">
				<h4>About Me</h4>
				<p>
					After over a decade of successful experience operating
					various types of kitchens from fine dining to large scale
					operations, I am now ready to dive into the rewarding world
					of web development. Having always maintained an interest in
					tech and computer science, I decided to make a change even
					before my industry saw a slowdown due to the pandemic.
					Taking advantage of the extra time on my hands, I have
					completed the Full Stack Web Developer certificate program
					at UT.
				</p>
				<Button
					variant="secondary"
					className="align-self-right resumeButton"
					href={pdf}
					target="_blank">
					My Resume
				</Button>
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

import React from "react";
import "./about.css";
import profileImage from "../../images/profile-05.jpg";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/files/JdmResume2020current.pdf";

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
					completed the Web Developer certificate program at UT.
				</p>
				<Button
					variant="light"
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

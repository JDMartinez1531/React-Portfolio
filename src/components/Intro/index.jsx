import React from "react";
import "./intro.css";
import Card from "react-bootstrap/Card";
import cardBg from "../../images/introbg.jpg";

function Intro() {
	return (
		<Card className="intro">
			<Card.Img src={cardBg} className="introbg"/>
			<Card.ImgOverlay>
				<Card.Title className="name">Joshua Martinez</Card.Title>
				<Card.Text className="intro-text">
					Lorem ipsum dolor sit amet, dicat propriae mei ea, duo at enim dolor
					referrentur, te posse pericula pri. Ei vix nonumes dissentias, dolor
					legere consectetuer quo te. Lorem nostro gubergren ad quo. Et insolens
				</Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
}

export default Intro;

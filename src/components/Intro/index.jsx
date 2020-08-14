import React from "react";
import "./intro.css";
import Card from "react-bootstrap/Card";
import cardBg from "../../images/introbg.jpg";

function Intro() {
	return (
		<Card className="intro">
			<Card.Img src={cardBg} />
			<Card.ImgOverlay>
				<Card.Title className="name">Joshua Martinez</Card.Title>
				<Card.Text className="intro-text">
					Lorem ipsum dolor sit amet, dicat propriae mei ea, duo at enim dolor
					referrentur, te posse pericula pri. Ei vix nonumes dissentias, dolor
					legere consectetuer quo te. Lorem nostro gubergren ad quo. Et insolens
					instructior his, vis odio propriae gubergren in, cu rebum erroribus
					consequuntur mel. Te sed nobis graeco. Ridens iriure vix at. Ut pro
					graeco aliquip, ei sapientem temporibus vel. Possim eripuit ut nec, id
					ponderum voluptatibus quo. Ea dicit tibique periculis mea, phaedrum
					referrentur sit id, quo ferri laoreet qualisque ut. Et nec prompta
					salutatus comprehensam, ne eam sale clita suavitate, natum mundi
					expetendis ad vis. Vis cu vivendum consetetur inciderint, in laudem
					vocent definitionem nam. Nec ut assueverit dissentiunt.
				</Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
}

export default Intro;

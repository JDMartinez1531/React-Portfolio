import React from "react";
import "./portcard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import img from "../../images/teampro.png"

function Portcard() {
	return (
		<Card className="portcard">
			<Card.Img variant="top" src={img} />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<ButtonGroup aria-label="Basic example">
					<Button variant="secondary">Left</Button>
					<Button variant="secondary">Right</Button>
				</ButtonGroup>
			</Card.Footer>
		</Card>
	);
}

export default Portcard;

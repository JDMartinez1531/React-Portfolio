import React from "react";
import "./portcard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img from "../../images/teampro.png"

function Portcard() {
	return (
		<Card className="portcard shadow p-3 mb-5 bg-white rounded">
			<Card.Img variant="top" src={img} />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</Card.Text>
			</Card.Body>
					<Button block >Click me</Button>
			
		</Card>
	);
}

export default Portcard;

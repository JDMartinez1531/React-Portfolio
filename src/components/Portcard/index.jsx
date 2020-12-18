import React from "react";
import "./portcard.css";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";

function Portcard(props) {
	const techList = props.tech.map((item) => (
		<ListGroup.Item>{item}</ListGroup.Item>
	));
	return (
		<Card className="portcard shadow p-3 mb-5 bg-white rounded">
			<Card.Img variant="top" src={props.imageLocation} />
			<Card.Body>
				<Card.Title>
					<a href={props.url}>{props.title}</a>
				</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<h5 className="tech-header">Built with</h5>
				<ListGroup variant="flush">{techList}</ListGroup>
			</Card.Body>
			<a className="ghicon" href={props.repo}>
				<FaGithub />
			</a>
		</Card>
	);
}

export default Portcard;

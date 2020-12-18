import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import "./skills.css";

function Skills() {
	return (
		<Container fluid className="skills">
			<h3 className="skills-header">Technical Skills</h3>
			<ListGroup horizontal="md" className="skillsList">
				<ListGroup.Item>React.JS</ListGroup.Item>
				<ListGroup.Item>Javascript</ListGroup.Item>
				<ListGroup.Item>Node.JS</ListGroup.Item>
				<ListGroup.Item>MongoDB</ListGroup.Item>
				<ListGroup.Item>MySQL</ListGroup.Item>
				<ListGroup.Item>HTML5</ListGroup.Item>
				<ListGroup.Item>CSS3</ListGroup.Item>
			</ListGroup>
		</Container>
	);
}

export default Skills;

import React from "react";
import "./intro.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Intro() {
	return (
		<Container fluid className="intro" id="top">
			<Row>
				<Col>
					<h1 className="align-items-center name">Joshua Martinez</h1>
				</Col>
			</Row>
			<Row className="align-items-center">
				<Col md={{ span: 6, offset: 3 }}>
					<p className="intro-text">
						Organized and hard-working web developer seeking to join
						a modern company to rapidly build skills and provide
						value. Looking to leverage proven organization and
						management skills to deliver results.
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="button-col" xs={{ span: 6, offset: 3 }}>
					<Button
						className="linkedin-button"
						variant="light"
						href="#">
						<FaLinkedin />
					</Button>
					<Button className="github-button" variant="light" href="#">
						<FaGithub />
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className="email">jdmartinez1531@gmail.com</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Intro;

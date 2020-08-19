import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";

function Contact() {
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
		if (ok) {
			form.reset();
		}
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: "https://formspree.io/xrgyzgnj",
			data: new FormData(form),
		})
			.then((r) => {
				handleServerResponse(true, "Thanks!", form);
			})
			.catch((r) => {
				handleServerResponse(false, r.response.data.error, form);
			});
	};
	return (
		<Container fluid className="form-wrapper" id="contact">
			<Row>
				<Col className="heading-col">
					<h1 className="contact-header">Contact</h1>
				</Col>
			</Row>
			<Row className="form-row">
			<form onSubmit={handleOnSubmit}>
				<Col>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Enter email"
							required
						/>
				</Col>
				<Col>
						<textarea className="formtextarea"
							id="message"
							name="message"
							cols="40"
							placeholder="Feel free to leave me a message"
							required
						></textarea>
				</Col>
				<Col>
						<button className="btn btn-primary" type="submit" disabled={serverState.submitting}>
							Submit
						</button>
						{serverState.status && (
							<p className={!serverState.status.ok ? "errorMsg" : ""}>
								{serverState.status.msg}
							</p>
						)}
				</Col>
					</form>
			</Row>
		</Container>
	);
}

export default Contact;









/* <Container fluid className="form-wrapper" id="contact">
			<Row>
				<Col>
					<h1>Contact</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<form onSubmit={handleOnSubmit}>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Enter email"
							required
						/>
						<textarea
							id="message"
							name="message"
							cols="40"
							placeholder="Feel free to leave me a message"
							required
						></textarea>
						<button type="submit" disabled={serverState.submitting}>
							Submit
						</button>
						{serverState.status && (
							<p className={!serverState.status.ok ? "errorMsg" : ""}>
								{serverState.status.msg}
							</p>
						)}
					</form>
				</Col>
			</Row>
		</Container> */
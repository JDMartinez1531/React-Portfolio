import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";

function Contact() {
	// using state to keep track of server status
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});
	// function to handle response from formspree
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
		// if accepted, reset form
		if (ok) {
			form.reset();
		}
	};
	// function to handle form submission
	const handleOnSubmit = (e) => {
		// prevent default form behavior, assign the even target to the variable form
		e.preventDefault();
		const form = e.target;
		// set server state to submitting while waiting for response
		setServerState({ submitting: true });

		// configure and send axios post to formspree, returns promise
		axios({
			method: "post",
			url: "https://formspree.io/xrgyzgnj",
			data: new FormData(form),
		})
		// resolve promise
			.then((r) => {
				handleServerResponse(true, "Thanks!", form);
			})
			// catch any errors along the way
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
						{/* disables button while waiting for response from formspree */}
						<button className="btn btn-primary" type="submit" disabled={serverState.submitting}>
							Submit
						</button>
						{/* displays status message from formspree if status is not ok */}
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
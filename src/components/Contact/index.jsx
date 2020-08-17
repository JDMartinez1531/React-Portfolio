import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Contact() {
	const [validated, setValidated] = useState(false);
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

	const handleSubmit = (event) => {
		const form = event.target;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		event.preventDefault();
		setValidated(true);
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
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Group as={Col} md="4" controlId="validationCustom01">
				<Form.Control required type="text" placeholder="Enter name" />
				<Form.Control.Feedback>Accepted</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please enter name.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4" controlId="validationCustom02">
				<Form.Control required type="email" placeholder="Enter email" />
				<Form.Control.Feedback>Accepted</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please enter email.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4" controlId="validationCustomUsername">
				<Form.Control
					required
					placeholder="Leave me a message."
					as="textarea"
					rows="3"
				/>
				<Form.Control.Feedback type="invalid">
					Please don't send blank messages.
				</Form.Control.Feedback>
			</Form.Group>
			<Button type="submit" disabled={serverState.submitting}>
				Send
			</Button>
			{serverState.status && (
				<p className={!serverState.status.ok ? "errorMsg" : ""}>
					{serverState.status.msg}
				</p>
			)}
		</Form>
	);
}

export default Contact;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Contact() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			
				<Form.Group as={Col} md="4" controlId="validationCustom01">
					<Form.Label>Name</Form.Label>
					<Form.Control required type="text" placeholder="Enter name" />
					<Form.Control.Feedback>Accepted</Form.Control.Feedback>
				</Form.Group>
				<Form.Group as={Col} md="4" controlId="validationCustom02">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Control.Feedback>Accepted</Form.Control.Feedback>
				</Form.Group>
				<Form.Group as={Col} md="4" controlId="validationCustomUsername">
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" rows="3" />
					<Form.Control.Feedback type="invalid">
						Please choose a username.
					</Form.Control.Feedback>
				</Form.Group>
			<Button type="submit">Submit form</Button>
		</Form>
	);
}

export default Contact;

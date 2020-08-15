import React from "react";
import Nav from "react-bootstrap/Nav";
import {
	FaLinkedin,
	FaGithub,
	FaPhoneAlt,
} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"
import "./footer.css"
const linkedInUrl = "https://www.linkedin.com/in/joshuadmartinez/";
const gitHubUrl = "https://github.com/JDMartinez1531";
const phone = "tel:+5126580746"
const email = "mailto:jdmartinez1531@gmail.com"

function Footer() {
	return (
		<Nav className="justify-content-center footer">
			<Nav.Item>
				<Nav.Link href={linkedInUrl} className="footer-icons">
					<FaLinkedin />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={gitHubUrl} className="footer-icons">
					<FaGithub />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={phone} className="footer-icons">
					<FaPhoneAlt />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={email} className="footer-icons">
					<AiOutlineMail />
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default Footer;

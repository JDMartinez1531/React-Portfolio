import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.css";

function Header() {
	return (
		<Navbar
			sticky="top"
			collapseOnSelect
			expand="lg"
			variant="dark"
			className="navbg"
		>
			<Navbar.Brand href="#home">
				<span className="brandText">JDM </span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto"></Nav>
				<Nav.Link href="#" className="navText">
					About
				</Nav.Link>
				<Nav.Link href="#" className="navText">
					Portfolio
				</Nav.Link>
				<Nav.Link href="#" className="navText">
					Contact
				</Nav.Link>
				<Nav></Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;

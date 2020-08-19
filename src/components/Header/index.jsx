import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import "./header.css";

function Header() {
	
	return (
		<Navbar
			sticky="top"
			collapseOnSelect
			expand="lg"
			variant="light"
			className="navbg"
		>
			<Navbar.Brand href="#" >
			<Link
						activeClass="active"
						to="top"
						spy={true}
						smooth={true}
						offset={-60}
						duration={1500}
					>
						<span className="brandText">JDM </span>
					</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto"></Nav>
				<Nav.Link className="navText">
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={-60}
						duration={1000}
					>
						About
					</Link>
				</Nav.Link>
				<Nav.Link className="navText">
				<Link
						activeClass="active"
						to="portfolio"
						spy={true}
						smooth={true}
						offset={-80}
						duration={1000}
					>
						Portfolio
					</Link>
					
				</Nav.Link>
				<Nav.Link className="navText">
				<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={-80}
						duration={1000}
					>
						Contact
					</Link>
					
				</Nav.Link>
				<Nav></Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;

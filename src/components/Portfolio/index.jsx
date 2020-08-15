import React from "react";
import Container from "react-bootstrap/Container"
import "./portfolio.css"
import Portcard from "../Portcard"
import Row from "react-bootstrap/Row"

function Portfolio() {
	return <div className="portfolio-container">
        <h2>Portfolio</h2>
        <Container>
            <Row sm={1} md={3} className="cardDiv">
            <Portcard />
            <Portcard />
            <Portcard />
            <Portcard />
            <Portcard />
            <Portcard />
            </Row>
        </Container>
    </div>
}

export default Portfolio;

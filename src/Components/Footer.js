import React from "react";
import { Container, Row ,Col } from "react-bootstrap";
import logo from '../img/logo.png';
import navIcon1 from"../img/nav-icon1.svg";
import navIcon2 from"../img/nav-icon2.svg";
import navIcon3 from"../img/nav-icon3.svg";

const Footer= ()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/kholood-mohamed"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>	&copy; CopyRight 2024. Kholood Mohamed </p>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;
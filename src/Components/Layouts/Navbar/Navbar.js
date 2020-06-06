import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import {NavLink} from 'react-router-dom';
import './Navbar.css'
import {Container,
        Row,
        Col,
        Navbar,
        Nav,
        Button
    } from 'react-bootstrap';
import Photo from '../../../assets/imgs/logo.png';
const navbar = () => {
    return (
        <Aux>
            <div className = "content1">
                <Container>
                    <Row>
                        <Col xs = {12} sm = {12} lg = {4}>
                            <div className = "links">
                                <a href = "#" className = "active">عربي</a>
                                <a href = "#" className = "eng">EN</a>
                            </div>
                        </Col>
                        <Col xs = {12} sm = {12} lg = {4}>
                            <div className = "icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </Col>
                        <Col xs = {12} sm = {12} lg = {4}>
                        <ul>
                            <li>
                                <span>bloodbank@gmail.com</span>
                                <i className="fas fa-envelope"></i>
                            </li>
                            <li style = {{marginRight:'15px'}}>
                                <span>+966506954964</span>
                                <i className="fas fa-phone-volume"></i>
                            </li>
                        </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className = "content2">
                <Container>
                    <Row>
                        <Col lg = {12} md = {12} sm = {12}>
                            <Navbar expand = "lg">
                                <img src = {Photo} alt = ""/>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <NavLink exact to="/" className = "nav-link" >الرئيسية</NavLink>
                                    <NavLink to = "/DonatorInfo" className = "nav-link">عن بنك الدم</NavLink>
                                    <NavLink to="/Articles" className = "nav-link">المقالات</NavLink>
                                    <NavLink to = "/Donations" variant="success" className = "nav-link">طلب التبرع</NavLink>
                                    <NavLink to="/About" className = "nav-link" >من نحن</NavLink>
                                    <NavLink to = '/Contact' className = "nav-link">اتصل بتا</NavLink>                                    </Nav>
                                    <div class = "buttons">
                                    <NavLink to = "/Register" variant="success" className = "signup">انشاء حساب جديد</NavLink>
                                    <NavLink to = '/Login' variant="success" className = "login">الدخول</NavLink>
                                    </div>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default navbar;
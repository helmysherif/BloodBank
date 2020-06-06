import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Contact.css';
import Photo from '../../../assets/imgs/logo.png';
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
const Contact  = () => {
    return (
        <Aux>
            <div className = "contact-us">
                <Container>
                    <Row>
                        <Col lg = {6} md = {6} sm = {12}>
                            <div className = "call-us">
                                <h5>اتصل بنا</h5>
                                <div className = "call">
                                    <div class = "text-center logo">
                                        <img src = {Photo} alt = ""/>
                                    </div>
                                    <div class = "list">
                                        <ul>
                                            <li>
                                                <p>الجوال : </p>
                                                <span>124123412312</span>
                                            </li>
                                            <li>
                                                <p>فاكس : </p>
                                                <span>234234234</span>
                                            </li>
                                            <li>
                                                <p>البريد الالكتروني : </p>
                                                <span>name@name.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4>تواصل معنا</h4>
                                    <div className = "icons">
                                        <a href = "#" style = {{marginRight:'0'}}>
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                        <a href = "#">
                                        <i className="fab fa-twitter-square"></i>
                                        </a>
                                        <a href = "#">
                                        <i className="fab fa-youtube-square"></i>
                                        </a>
                                        <a href = "#">
                                        <i className="fab fa-whatsapp-square"></i>
                                        </a>
                                        <a href = "#">
                                        <i className="fab fa-google-plus-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg = {6} md = {6} sm = {12}>
                            <div className = "contact">
                                <h5>تواصل معنا</h5>
                                <div className = "call2">
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control size="lg" type="text" placeholder="الاسم" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control size="lg" type="email" placeholder="البريد الالكتروني" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control size="lg" type="text" placeholder="الجوال" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control size="lg" type="text" placeholder="عنوان الرسالة" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <textarea placeholder = "نص الرسالة"></textarea>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Contact;
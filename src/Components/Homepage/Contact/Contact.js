import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Contact.css';
import Photo from '../../../assets/imgs/whats.png';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Contact = () => {
    return (
        <Aux>
            <div className = "content7">
                <Container>
                    <Row>
                        <Col lg = {6} md = {12} sm = {12}>
                            <div className = "text">
                                <h3>اتصل بنا</h3>
                                <span className = "border2"></span>
                                <p>يمكنك الاتصال بنا للاستفسار عن معلومة و سيتم الرد عليكم</p>
                                <div className="contact">
                                    <span>+002 0124545454</span>
                                    <div style = {{zIndex:'2'}}>
                                        <img src = {Photo}/>
                                    </div>
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
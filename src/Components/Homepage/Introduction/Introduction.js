import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Introduction.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Introduction = () => {
    return (
        <Aux>
            <div className = "content3">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <div className = "title">
                                <h1>بنك الدم نمضي قدما لصحة افضل</h1>
                                <p>هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة<br/>لقد تم توليد هذا النص من مولد النص العرب</p>
                                <a href="#">المزيد</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Introduction;
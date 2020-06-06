import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Photo from '../../../assets/imgs/App.png';
import Photo2 from '../../../assets/imgs/google.png';
import Photo3 from '../../../assets/imgs/ios.png';
import './Available.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Available = () => {
    return (
        <Aux>
            <div className = "content8">
                <Container>
                    <Row>
                        <Col lg = {6} md = {6} sm = {12}>
                            <div className = "text2">
                                <h4>تطبيق بنك الدم</h4>
                                <p>هذا النص هو مثال لنص يمكن ان يستبدل فى نفس المساحه, لقد تم توليد هذا النص من مولد النص العربى</p>
                            </div>
                            <div className = "available">
                                <h6>متوفر علي</h6>
                                <a href = "#">
                                    <img src = {Photo2} alt = ""/>
                                </a>
                                <a href = "#">
                                    <img src = {Photo3} alt = ""/>
                                </a>
                            </div>
                        </Col>
                        <Col lg = {6} md = {6} sm = {12}>
                            <img src = {Photo} alt = '' className = "img"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Available;
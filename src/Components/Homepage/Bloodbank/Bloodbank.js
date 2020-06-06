import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Bloodbank.css';
import Photo from '../../../assets/imgs/about.png';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const BloodBank = () => {
    return (
        <Aux>
            <div className = "content4">
                <Container>
                    <Row>
                        <Col lg = {6} sm = {12}>
                            <div className = "about">
                                <p>بنك الدم هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة, لقد تم توليد هذا النص من كولد النص العربي حيث يمكنك ان تولد مثل  هذا النص او العديد من النصوص الاخري اضافة الي زيادة عدد الحروف التي يولدها التطبيق يطلع علي صورة حقيقية لتصميم الموقع  </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default BloodBank;
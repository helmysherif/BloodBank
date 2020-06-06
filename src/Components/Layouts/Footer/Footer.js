import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Footer.css'
import Photo from '../../../assets/imgs/logo.png';
import Photo2 from '../../../assets/imgs/google1.png';
import Photo3 from '../../../assets/imgs/ios1.png';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Footer = () => {
    return (
        <Aux>
            <div className = "footer">
                <Container>
                    <Row>
                        <Col lg = {4} md = {4} sm = {12}>
                            <div className = "blood">
                                <img src = {Photo} alt = "" />
                                <h4>بنك الدم</h4>
                                <p>هذا النص هو مثال لنص يمكن ان يستبدل فى نفس   حيث  يمكن ان تولد مثل هذا النص او العديد منالنصوص الاخري اضافة الي زيادة عدد الحروف التي يولدها المساحه, لقد تم توليد هذا النص من مولد النص العربى</p>
                            </div>
                        </Col>
                        <Col lg = {4} md = {4} sm = {12}>
                            <ul>
                                <li class = "active"><a href = "#">الرئيسية</a></li>
                                <li><a href = "#">عن بنك الدم</a></li>
                                <li><a href = "#">المقالات</a></li>
                                <li><a href = "#">طلبات التبرع</a></li>
                                <li><a href = "#">من نحن</a></li>
                                <li><a href = "#">اتصل بنا</a></li>

                            </ul>
                        </Col>
                        <Col lg = {4} md = {4} sm = {12}>
                            <div className = "available">
                                <p>متوفر علي</p>
                                <a href = "#">
                                    <img src = {Photo2} alt = ""/>
                                </a>
                                <a href = "#">
                                    <img src = {Photo3} alt = ""/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className = "bottom-footer">
                <Container>
                    <Row>
                        <Col lg = {6} md = {6} sm = {12}>
                            <div className = "icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </Col>
                        <Col lg = {6} md = {6} sm = {12}>
                        <p class = "p2">
                            جميع الحقوق محفوظ 
                            <span>لبنك الدم </span>و ابداع تك  
                            &copy; 2019
                        </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Footer;